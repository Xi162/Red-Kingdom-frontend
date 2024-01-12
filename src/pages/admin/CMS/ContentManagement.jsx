import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "/src/state/Provider";
import axios from "axios";
import "/src/App.css";

const ContentManagement = () => {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);
  const [loginState, setLoginState] = useContext(LoginContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/articles`)
      .then((res) => {
        console.log(res);
        setItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function convertTimestamp(timestamp) {
    const time = new Date(timestamp).toLocaleTimeString();
    const date = new Date(timestamp).toDateString();

    // Add more space or formatting as needed
    const formattedTimestamp = time + ", " + date;

    return formattedTimestamp;
  }

  return (
    <div className="w-full">
      <div className="mr-4">
        <table>
          <thead>
            <tr>
              <th className="text-xl font-bold text-center tracking-wide">
                Article ID
              </th>
              <th className="text-xl font-bold text-center tracking-wide">
                Title
              </th>
              <th className="text-xl font-bold text-center tracking-wide">
                Author ID
              </th>
              <th className="text-xl font-bold text-center tracking-wide">
                Date created
              </th>
              <th className="text-xl font-bold text-center tracking-wide">
                Date Modified
              </th>
              <th className="text-xl font-bold text-center tracking-wide">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item) => (
              <tr key={item.id}>
                <td className="text-base font-bold">{item.id}</td>
                <td className="text-base font-bold">{item.title}</td>
                <td className="text-base font-bold">{item.UserId}</td>
                <td className="text-base font-bold w-36">
                  {new Date(item.createdAt).toLocaleTimeString()}
                  <br />
                  {new Date(item.createdAt).toDateString()}
                </td>
                <td className="text-base font-bold w-36">
                  {new Date(item.updatedAt).toLocaleTimeString()}
                  <br />
                  {new Date(item.updatedAt).toDateString()}
                </td>
                <td>
                  {/* Edit button */}
                  <button
                    className="text-blue-500 m-2"
                    onClick={() => {
                      navigate(`/admin/CMS/update_post/${item.id}`);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>

                  {/* Delete Button */}
                  <button
                    className="text-red-500"
                    onClick={() => {
                      const shouldDelete = window.confirm(
                        "Are you sure you want to delete?"
                      );

                      if (shouldDelete) {
                        const itemDeleteID = item.id;
                        axios
                          .delete(`http://localhost:5500/articles/${item.id}`, {
                            headers: {
                              Authorization: `Bearer ${loginState.token}`,
                            },
                          })
                          .then((response) => {
                            // Handle success, e.g., update UI
                            const updatedList = itemList.filter(
                              (article) => article.id !== itemDeleteID
                            );
                            setItemList(updatedList);
                          })
                          .catch((error) => {
                            // Handle error, e.g., show an error message
                            console.error("Error deleting article:", error);
                          });
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentManagement;
