import shirt_placeholder from "/src/assets/images/shirt_placeholder.jpeg";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "/src/state/Provider";
export default function CartRow({ row, rowIndex }) {
  const [loginState, setLoginState] = useContext(LoginContext);
  const [quantity, setQuantity] = useState(row.quantity);
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
            <button
              className="border border-white rounded-[25px] bg-gray-300 p-1 hover:bg-gray-400"
              onClick={(e) => {
                e.preventDefault();
                axios
                  .delete(`http://localhost:5500/cart/${loginState.userID}`, {
                    headers: {
                      Authorization: `Bearer ${loginState.token}`,
                    },
                    data: {
                      productID: row.id,
                      size: row.size,
                    },
                  })
                  .then((res) => {
                    setQuantity((quantity) => quantity - 1);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
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
            <div>{quantity}</div>
            <button
              className="border border-white rounded-[25px] bg-gray-300 p-1 hover:bg-gray-400"
              onClick={(e) => {
                e.preventDefault();
                axios
                  .post(
                    `http://localhost:5500/cart/${loginState.userID}`,
                    {
                      productID: row.id,
                      size: row.size,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${loginState.token}`,
                      },
                    }
                  )
                  .then((res) => {
                    setQuantity((quantity) => quantity + 1);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
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
        </div>
      </td>
      <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-center font-black">
        <span>{row.size}</span>
      </td>
      <td className="pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white text-center font-black">
        <span>{row.price * quantity}</span>
      </td>
    </tr>
  );
}
