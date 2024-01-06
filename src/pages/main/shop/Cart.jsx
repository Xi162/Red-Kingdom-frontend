// import React from 'react'
import CartTable from "/src/components/shop/user/CartTable";
// import { Link } from 'react-router-dom'
import Breadcrumb from "/src/components/shop/user/Breadcrumb";

function Cart() {
  const tableHeaders = ["Product", "Description", "Quantity", "Price"];
  const tableRows = [
    [
      "23/24 Home Shirt njdkcna cjasn jcnkas",
      "Size: S\nLong-sleave",
      1,
      "$140.99",
    ],
    [
      "23/24 Home Shirt njdkcna cjasn jcnkas",
      "Size: S\nLong-sleave",
      1,
      "$140.99",
    ],
    [
      "23/24 Home Shirt njdkcna cjasn jcnkas",
      "Size: S\nLong-sleave",
      1,
      "$140.99",
    ],
  ];
  // ['Previously previous page', 'Previous page', ..., 'Current page']
  const historyNav = ["Main", "Kit", "Details", "Cart"];

  return (
    <div>
      <Breadcrumb history={historyNav}></Breadcrumb>
      <div className="ml-10 mr-10">
        {" "}
        {/* table-wrapper */}
        <CartTable headers={tableHeaders} rows={tableRows}></CartTable>
        <div className="mt-10 text-[25px] font-black">
          <span>TOTAL</span>
        </div>
        <div className="flex justify-between mt-5 font-black">
          <div className="text-[20px]">Number of products: 3</div>
          <div className="text-[25px]">$123.45</div>
        </div>
        <div className="flex items-end justify-end mt-5 mb-10">
          <button className="w-[20%] border border-border text-white bg-primary text-[25px] font-black p-3 rounded-lg hover:bg-red-700">
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
