import shirt_placeholder from "/src/assets/images/shirt_placeholder.jpeg";

export default function OrderDetailRow({ row, rowIndex }) {
  return (
    <tr
      key={rowIndex}
      className="bg-white shadow-xl cursor-pointer hover:bg-gray-100"
    >
      <td
        className={`pl-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white`}
      >
        <img src={shirt_placeholder} alt="" className="w-[100px] h-[80px]" />
      </td>
      <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white">
        {row.name}
      </td>
      <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-center font-black">
        <div>
          <div className="flex justify-evenly items-center mb-3">
            <div>{row.quantity}</div>
          </div>
        </div>
      </td>
      <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-center font-black">
        <span>{row.size}</span>
      </td>
      <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-center font-black">
        <span>{row.price * row.quantity}</span>
      </td>
    </tr>
  );
}
