// import React from "react";

const ReadOnlyRowMatch = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.dateCreated}</td>
      <td>{contact.creatorName}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.matchScore}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowMatch;
