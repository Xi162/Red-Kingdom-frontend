// import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.dateCreated}</td>
      <td>{contact.creatorName}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <EditIcon />
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
