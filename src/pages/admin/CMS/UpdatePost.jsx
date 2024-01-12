import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../../../state/Provider";
import axios from "axios";

const UpdatePost = () => {
  const { articleID } = useParams();

  const [loginState, setLoginState] = useContext(LoginContext);
  const [message, setMessage] = useState("No Message Set");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [inputs, setInputs] = useState([]);
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5500/articles/${articleID}`)
      .then((res) => {
        // article = res.data;
        setArticle(res.data);
        setTitle(res.data.title);
        setImage(res.data.image);
        setInputs(res.data.contents);
        // let contentsArray = res.data.contents;
        // let tmpArr = [];
        // for (let i = 0; i < contentsArray.length; ++i) {
        //   setTitle(res.data.title);
        //   setImage(res.data.image);
        //   // addNewBlock(contentsArray[i].type, contentsArray[i].content);
        //   tmpArr.push(contentsArray[i]);
        //   setInputs(tmpArr);

        //   console.log(contentsArray[i]);
        // }
        // console.log(tmpArr);
        // console.log(inputs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [articleID]);

  // UPDATE a block in the array
  const handleInputChange = (index, newValue) => {
    setInputs((prevInputs) =>
      prevInputs.map((input, i) =>
        i === index ? { ...input, content: newValue } : input
      )
    );
  };

  const handleSubmit = () => {
    // Call POST API to add new article
    axios
      .post(
        `http://localhost:5500/articles/`,
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
        setMessage("Article added");
      })
      .catch((err) => {
        console.log(err);

        console.log(title);
        inputs.forEach((input) => {
          console.log(input.content, input.type);
        });
        setMessage("Article not added");
      });

    console.log(message);
    // Perform further actions like sending data to a backend, etc.
  };

  // ADD a block to the array
  function addNewBlock(labelName, content = "") {
    const newInput = {
      type: labelName,
      content: content,
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
            className="bg-white text-red-600 font-black text-2xl border-[2px] border-gray-950 px-4  rounded"
          >
            Publish
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
              return (
                <FormInputText
                  key={input.type + index}
                  label={input.type}
                  onDeleteClick={() => removeBlock(index)}
                  contentInput={input.content}
                ></FormInputText>
                // <FormInput
                //   key={input.type + index}
                //   label={input.type}
                //   deleteFlag={!isTitle}
                //   onDeleteClick={() => removeBlock(index)}
                // >
                //   <input
                //     name={`form-${index}`}
                //     value={input.content}
                //     onChange={(e) => {
                //       handleInputChange(index, e.target.value);
                //     }}
                //     type="text"
                //     className={formClassName}
                //     maxLength={50}
                //   ></input>
                // </FormInput>
              );
            } else if (input.type == "text") {
              return (
                <FormInputText
                  key={input.type + index}
                  label={input.type}
                  onDeleteClick={() => removeBlock(index)}
                  contentInput={input.content}
                ></FormInputText>
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

const FormInputTitle = ({ label, deleteFlag = true, onDeleteClick }) => {
  const [content, setContent] = useState("");

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

const FormInputText = ({
  label,
  deleteFlag = true,
  onDeleteClick,
  contentInput = "",
}) => {
  const [content, setContent] = useState(contentInput);
  useEffect(() => {
    setContent(contentInput);
  }, [contentInput]);

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
      <div className="p-[4px]">
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="text-box"
          cols="50"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default UpdatePost;
