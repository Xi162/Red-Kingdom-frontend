import { useNavigate } from "react-router-dom";

export default function OrderRow({ row, rowIndex }) {
  const navigate = useNavigate();
  return (
    <tr
      key={rowIndex}
      className="bg-white shadow-xl cursor-pointer hover:bg-gray-100"
      onClick={() => {
        navigate(`/shop/orders/${row.id}`);
      }}
    >
      <td
        className={`pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white`}
      >
        {row.id}
      </td>
      <td
        className={`pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white`}
      >
        {new Date(row.createdAt).toDateString()}
      </td>
      <td
        className={`pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-center font-black`}
      >
        {row.status === "pending" && (
          <span className="text-orange-500">{row.status}</span>
        )}
        {row.status === "cacelled" && (
          <span className="text-red-500">{row.status}</span>
        )}
        {row.status === "delivered" && (
          <span className="text-green-500">{row.status}</span>
        )}
      </td>
      <td
        className={`pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-center font-black`}
      >
        {row.totalPrice}
      </td>
    </tr>
  );
}
