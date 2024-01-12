import React from "react";
// import FileUpload from "/src/components/CMS/FileUpLoad";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";
const CreatePost = () => {
  const [inputs, setInputs] = useState([
    {
      label: "Title",
      value: "",
    },
    {
      label: "Subtitle",
      value: "",
    },
    {
      label: "Text",
      value: "",
    },
    {
      label: "Image",
      // value: null, // LEGACY CODE
      value: "",
    },
  ]);

  const handleInputChange = (index, newValue) => {
    setInputs((prevInputs) =>
      prevInputs.map((input, i) =>
        i === index ? { ...input, value: newValue } : input
      )
    );
  };

  const handleSubmit = () => {
    // Retrieve all the input values from state
    inputs.forEach((input) => {
      console.log(`${input.label}:`, input.value);
    });
    // Perform further actions like sending data to a backend, etc.
  };

  const addNewBlock = (labelName) => {
    const newInput = {
      label: labelName,
      value: labelName === "Image" ? null : "", // Initial value for different input types
    };

    setInputs([...inputs, newInput]);
    toggleButton();
  };

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

          {inputs.map((input, index) => {
            if (
              input.label == "Title" ||
              input.label == "Subtitle" ||
              input.label == "Image"
            ) {
              let isTitle = false;
              let formClassName = "text-box font-bold";
              if (input.label == "Title") {
                formClassName += " text-xl";
                isTitle = true;
              }
              return (
                <FormInput
                  key={input.label + index}
                  label={input.label}
                  // onInputChange={() => input.handler}
                  deleteFlag={!isTitle}
                  onDeleteClick={() => removeBlock(index)}
                >
                  <input
                    name={`form-${index}`}
                    value={input.value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    type="text"
                    className={formClassName}
                    maxLength={50}
                  ></input>
                </FormInput>
              );
            } else if (input.label == "Text") {
              return (
                <FormInput
                  key={input.label + index}
                  label={input.label}
                  // onInputChange={() => input.handler}
                  onDeleteClick={() => removeBlock(index)}
                >
                  <textarea
                    name={`form${index}`}
                    value={input.value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className="text-box"
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
              className="mx-2 p-2 bg-primary font-bold text-white"
              onClick={toggleButton}
            >
              Add block
            </button>
          </div>
          <div className="flex px-4 space-x-6 hidden" id="blockInfo">
            <button
              className="bg-primary/30 p-2 font-bold"
              onClick={() => addNewBlock("Subtitle")}
            >
              Subtitle Block
            </button>
            <button
              className="bg-primary/50 p-2 font-bold"
              onClick={() => addNewBlock("Text")}
            >
              Text Block
            </button>
            <button
              className="bg-primary/40 p-2 font-bold"
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
