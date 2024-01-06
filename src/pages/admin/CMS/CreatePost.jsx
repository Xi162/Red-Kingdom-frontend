import React from "react";
import FileUpload from "/src/components/CMS/FileUpLoad";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";
const CreatePost = () => {
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");
  // Assuming FileUpload has a state for handling uploaded files
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubtitleChange = (value) => {
    setSubtitle(value);
  };

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleFileUpload = (file) => {
    // Assuming FileUpload component sets the file state
    setUploadedFile(file);
  };

  const handleSubmit = () => {
    // You can now use subtitle, text, and uploadedFile for your submission logic
    console.log("Subtitle:", subtitle);
    console.log("Text:", text);
    console.log("Uploaded File:", uploadedFile);

    // Reset the form or perform any other actions after submission
    setSubtitle("");
    setText("");
    setUploadedFile(null);
  };
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-3/4">
        <div className="flex justify-between items-center px-[20px] pt-[10px]">
          <h4 className="text-red-600 font-bold text-xl">Content</h4>
          <button
            onClick={handleSubmit}
            className="bg-white text-red-600 font-black text-2xl border-[2px] border-gray-950 px-4  rounded"
          >
            Publish
          </button>
        </div>
        <div>
          {/* Form.. */}
          <FormInput label={"Subtitle"} onInputChange={handleSubtitleChange}>
            <textarea className="text-box" cols="50" rows="3"></textarea>
          </FormInput>
          <FormInput label={"Text"} onInputChange={handleTextChange}>
            <textarea
              className="text-box"
              name=""
              id=""
              cols="50"
              rows="5"
            ></textarea>
            {/* <input type='textarea'></input> */}
          </FormInput>
          <FormInput label={"Image"} onInputChange={handleFileUpload}>
            <FileUpload />
          </FormInput>
          <button>Add block</button>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ label, onInputChange, children }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Call the onInputChange prop if provided
    if (onInputChange) {
      onInputChange(event.target.value);
    }
  };

  return (
    <div className="flex flex-col bg-stone-200 p-[10px] m-[10px]">
      {/* Input header */}
      <div className="flex flex-row justify-between">
        <div>
          <h6 className="text-red-600 font-bold text-xl">{label}</h6>
        </div>
        <button>
          <DeleteIcon />
        </button>
      </div>
      {/* Body with children */}
      <div className="p-[4px]">
        {React.cloneElement(children, {
          onChange: handleInputChange,
          value: inputValue,
        })}
      </div>
    </div>
  );
};

export default CreatePost;
