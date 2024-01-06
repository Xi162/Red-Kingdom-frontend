// import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="dateCreated"
          value={editFormData.dateCreated}
          onChange={handleEditFormChange}
          className="text-box py-0"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an creatorName..."
          name="creatorName"
          value={editFormData.creatorName}
          onChange={handleEditFormChange}
          className="text-box py-0"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
          className="text-box py-0"
        ></input>
      </td>
      <td className="g-4">
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
