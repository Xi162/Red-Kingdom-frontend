// import React from 'react'
import { useNavigate } from "react-router-dom";

function ProductTable({ rows }) {
  let headers = ["ID", "Name", "Quantity", "Size", "Price"];
  return (
    <div className="w-full p-12">
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
              <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-sm">
                {row.id}
              </td>
              <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-sm">
                {row.name}
              </td>
              <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-sm">
                {row.quantity}
              </td>
              <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-sm">
                <span>{row.size}</span>
              </td>
              <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-sm">
                <span>{row.quantity * row.price}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
