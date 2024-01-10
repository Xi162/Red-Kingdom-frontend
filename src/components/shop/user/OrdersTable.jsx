// import React from 'react'
// import { Link } from 'react-router-dom'
import OrderRow from "./OrderRow";

function OrdersTable({ headers, rows }) {
  return (
    <div className="">
      <table className="border-separate border-spacing-0 min-w-full">
        <thead>
          <tr className="">
            {headers.map((header, index) => (
              <th
                key={index}
                className={`p-[10px] sticky top-0 bg-gray-200 text-left pl-5 ${
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
            <OrderRow row={row} rowIndex={rowIndex} key={rowIndex} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
