import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../../../state/Provider";
import axios from "axios";

const CreatePost = () => {
  const [loginState, setLoginState] = useContext(LoginContext);
  const [message, setMessage] = useState("No Message Set");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [inputs, setInputs] = useState([]);

  const { articleID } = useParams();

  // UPDATE a block in the array
  const handleInputChange = (index, newValue) => {
    setInputs((prevInputs) =>
      prevInputs.map((input, i) =>
        i === index ? { ...input, content: newValue } : input
      )
    );
  };

  // AXIOS GET
  useEffect(() => {
    axios
      .get(`http://localhost:5500/articles/${articleID}`)
      .then((res) => {
        console.log(res);
        setInputs(res.data.contents);
        setTitle(res.data.title);
        setImage(res.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [articleID]);

  const handleSubmit = () => {
    // Call POST API to add new article
    axios
      .put(
        `http://localhost:5500/articles/${articleID}`,
        {
          title: title,
          image: image,
          userID: loginState.userID,
          contents: inputs,
        },
        {
          headers: {
            Authorization: `Bearer ${loginState.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setMessage("Article modified");
      })
      .catch((err) => {
        console.log(err);

        console.log(title);
        inputs.forEach((input) => {
          console.log(input.content, input.type);
        });
        setMessage("Article not modified");
      });

    console.log(message);
    // Perform further actions like sending data to a backend, etc.
  };

  // ADD a block to the array
  function addNewBlock(labelName) {
    const newInput = {
      type: labelName,
      content: "",
    };

    setInputs([...inputs, newInput]);
    toggleButton();
  }

  // DELETE a block from the array
  function removeBlock(index) {
    setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-3/4">
        <div className="flex justify-between items-center px-[20px] pt-[10px]">
          <h4 className="text-red-600 font-bold text-xl font-title tracking-wider">
            Content
          </h4>
          <button
            onClick={handleSubmit}
            className="bg-white text-red-600 font-black text-2xl border-[2px] border-gray-950 px-4 rounded"
          >
            Update Article
          </button>
        </div>
        <div id="mainContent">
          {/* Form.. */}

          <FormInput label={"Title"} deleteFlag={false}>
            <input
              name={"form-title"}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className={"text-box font-bold text-xl"}
              maxLength={50}
            ></input>
          </FormInput>

          <FormInput label={"Cover Image"} deleteFlag={false}>
            <input
              name={"form-cover-image"}
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              type="text"
              className={"text-box font-bold"}
              maxLength={50}
            ></input>
          </FormInput>

          {inputs.map((input, index) => {
            if (input.type == "subtitle" || input.type == "image") {
              let isTitle = false;
              let formClassName = "text-box font-bold";
              if (input.type == "Title") {
                formClassName += " text-xl";
                isTitle = true;
              }
              return (
                <FormInput
                  key={input.type + index}
                  label={input.type}
                  deleteFlag={!isTitle}
                  onDeleteClick={() => removeBlock(index)}
                >
                  <input
                    name={`form-${index}`}
                    value={input.content}
                    onChange={(e) => {
                      handleInputChange(index, e.target.value);
                    }}
                    type="text"
                    className={formClassName}
                    maxLength={50}
                  ></input>
                </FormInput>
              );
            } else if (input.type == "text") {
              return (
                <FormInput
                  key={input.type + index}
                  label={input.type}
                  // onInputChange={() => input.handler}
                  onDeleteClick={() => removeBlock(index)}
                >
                  <textarea
                    name={`form${index}`}
                    value={input.content}
                    onChange={(e) => {
                      handleInputChange(index, e.target.value);
                    }}
                    className="text-box whitespace-pre-line"
                    cols="50"
                    rows="4"
                  ></textarea>
                </FormInput>
              );
            }
          })}
        </div>
        <div className="mb-4 flex items-center">
          <div>
            <button
              className="mx-2 p-2 bg-primary font-bold text-white rounded-md"
              onClick={toggleButton}
            >
              Add block
            </button>
          </div>
          <div className="flex px-4 space-x-6 hidden" id="blockInfo">
            <button
              className="bg-primary/20 p-2 font-bold rounded-lg"
              onClick={() => addNewBlock("Subtitle")}
            >
              Subtitle Block
            </button>
            <button
              className="bg-primary/30 p-2 font-bold rounded-lg"
              onClick={() => addNewBlock("Text")}
            >
              Text Block
            </button>
            <button
              className="bg-primary/35 p-2 font-bold rounded-lg"
              onClick={() => addNewBlock("Image")}
            >
              Image Block
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function toggleButton() {
  const blockInfo = document.getElementById("blockInfo");
  blockInfo.classList.toggle("hidden");
}

const FormInput = ({
  label,
  onInputChange,
  children,
  deleteFlag = true,
  onDeleteClick,
}) => {
  const handleDeleteClick = () => {
    if (onDeleteClick) {
      onDeleteClick();
    }
  };

  return (
    <div className="flex flex-col bg-stone-200 p-2 m-2">
      {/* Input header */}
      <div className="flex flex-row justify-between">
        <div>
          <h6 className="text-red-600 font-bold text-xl font-title tracking-wider pb-2">
            {label}
          </h6>
        </div>
        {deleteFlag && ( // Conditionally render delete button based on deleteFlag
          <button onClick={handleDeleteClick}>
            <DeleteIcon />
          </button>
        )}
      </div>

      {/* Body with children */}
      <div className="p-[4px]">{React.cloneElement(children, {})}</div>
    </div>
  );
};

export default CreatePost;
