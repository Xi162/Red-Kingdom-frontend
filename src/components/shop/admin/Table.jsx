// import React from 'react'
import { useNavigate } from "react-router-dom";

function Table({ headers, rows }) {
  const navigate = useNavigate();
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
              onClick={() => {
                navigate(`/admin/shop/orders/${row.id}`);
              }}
              // className={rowIndex % 2 === 0 ? "bg-gray-200" : "bg-white"}
            >
              <td className="p-[10px] border-b border-black text-black">
                {row.id}
              </td>
              <td className="p-[10px] border-b border-black text-black">
                {row.receiver_name}
              </td>
              <td className="p-[10px] border-b border-black text-black">
                {row.address}
              </td>
              <td className="p-[10px] border-b border-black text-black">
                {row.totalPrice}
              </td>
              <td className="p-[10px] border-b border-black text-black">
                {row.status}
              </td>
              <td className="p-[10px] border-b border-black text-black">
                {new Date(row.createdAt).toDateString()}
              </td>
              <td className="p-[10px] border-b border-black text-black">
                {row.deliverDate
                  ? new Date(row.deliverDate).toDateString()
                  : "Waiting"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
