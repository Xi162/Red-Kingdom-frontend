// import React from 'react'
import OrderDetailRow from "./OrderDetailRow";

function OrderDetailsTable({ headers, rows }) {
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
                className={`p-[10px] sticky top-0 bg-gray-300  pl-5 text-[25px] text-center`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <OrderDetailRow row={row} rowIndex={rowIndex} key={rowIndex} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetailsTable;
