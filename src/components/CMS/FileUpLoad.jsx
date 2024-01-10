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
        </div>
      )}
    </div>
  );
};

export default FileUpload;
