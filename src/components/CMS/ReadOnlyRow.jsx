// import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.dateCreated}</td>
      <td>{contact.creatorName}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
