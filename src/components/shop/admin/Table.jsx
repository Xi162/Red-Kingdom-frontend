// import React from 'react'

function Table({ headers, rows }) {
  return (
    <div className="">
      <table className="border-separate border-spacing-0 min-w-full">
        <thead>
          <tr className="">
            {headers.map((header, index) => (
              <th
                key={index}
                className="p-[10px] sticky top-0 text-primary border-r border-border bg-gray-300"
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
              // className={rowIndex % 2 === 0 ? "bg-gray-200" : "bg-white"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="p-[10px] border-b border-black text-black"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
