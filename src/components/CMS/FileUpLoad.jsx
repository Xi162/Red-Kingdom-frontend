import { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*" // Allow only image files
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          {/* You can display a preview of the image here if needed */}
          {/* For example, you can use URL.createObjectURL(selectedFile) */}
          {/* and assign it to the src attribute of an <img> element */}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
