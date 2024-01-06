// import React from 'react'
import shirt_placeholder from "/src/assets/images/shirt_placeholder.jpeg";

function CartTable({ headers, rows }) {
  return (
    <div className="">
      <table className="border-separate border-spacing-0 min-w-full">
        <thead>
          <tr className="">
            <th
              className={`p-[10px] sticky top-0 bg-gray-300 text-left pl-5`}
            ></th>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`p-[10px] sticky top-0 bg-gray-300 text-left pl-5 ${
                  index === 2 || index === 3 ? "text-center pl-3" : ""
                } text-[25px]`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white shadow-xl cursor-pointer hover:bg-gray-100"
            >
              <td
                className={`pl-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white`}
              >
                <img
                  src={shirt_placeholder}
                  alt=""
                  className="w-[100px] h-[80px]"
                />
              </td>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white ${
                    cellIndex === 2 || cellIndex === 3
                      ? "text-center font-black"
                      : ""
                  }`}
                >
                  {cellIndex === 1 && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cell.replace(/\n/g, "<br/>"),
                      }}
                    />
                  )}
                  {cellIndex === 2 && (
                    <div>
                      <div className="flex justify-evenly items-center mb-3">
                        <button className="border border-white rounded-[25px] bg-gray-300 p-1 hover:bg-gray-400">
                          <svg
                            className="w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 12h-15"
                            ></path>
                          </svg>
                        </button>
                        <div>{cell}</div>
                        <button className="border border-white rounded-[25px] bg-gray-300 p-1 hover:bg-gray-400">
                          <svg
                            className="w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="border border-gray-300 pt-1 pb-1 pl-6 pr-6 shadow-inner hover:bg-gray-200">
                          <svg
                            className="w-8 text-primary"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  {cellIndex !== 1 && cellIndex !== 2 && <span>{cell}</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
