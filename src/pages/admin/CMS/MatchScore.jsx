import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "/src/App.css";
// import data from "./mock-data.json";
import ReadOnlyRowMatch from "/src/components/CMS/ReadOnlyRowMatch";
import EditableRowMatch from "/src/components/CMS/EditableRowMatch";
const data = [
  {
    id: 1,
    dateCreated: "01/02/2013",
    creatorName: "Ivan",
    phoneNumber: "+84123456789",
    matchScore: "3-1",
  },
  {
    id: 2,
    dateCreated: "28/07/2014",
    creatorName: "Jesus",
    phoneNumber: "+84123812789",
    matchScore: "4-0",
  },
  {
    id: 3,
    dateCreated: "01/02/2023",
    creatorName: "Nketiah",
    phoneNumber: "+84912456789",
    matchScore: "2-5",
  },
];
export default function MatchScore() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    dateCreated: "",
    creatorName: "",
    phoneNumber: "",
    matchScore: "",
  });

  const [editFormData, setEditFormData] = useState({
    dateCreated: "",
    creatorName: "",
    phoneNumber: "",
    matchScore: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      dateCreated: addFormData.dateCreated,
      creatorName: addFormData.creatorName,
      phoneNumber: addFormData.phoneNumber,
      matchScore: addFormData.matchScore,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      dateCreated: editFormData.dateCreated,
      creatorName: editFormData.creatorName,
      phoneNumber: editFormData.phoneNumber,
      matchScore: editFormData.matchScore,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      dateCreated: contact.dateCreated,
      creatorName: contact.creatorName,
      phoneNumber: contact.phoneNumber,
      matchScore: contact.matchScore,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="page-container">
      <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Date Created</th>
                <th>Creator Name </th>
                <th>Phone Number</th>
                <th>Match Score</th> {/* Add this line */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, key) => (
                <Fragment key={key}>
                  {editContactId === contact.id ? (
                    <EditableRowMatch
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRowMatch
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>

        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="dateCreated"
            required="required"
            placeholder="Enter a date"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="creatorName"
            required="required"
            placeholder="Enter a name"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number"
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}
