// import React from "react";
import Table from "/src/components/shop/admin/Table";

function ShopHistory() {
  const tableHeaders = [
    "ID",
    "Customer Name",
    "Product Name",
    "Category",
    "Quantity",
    "Price",
    "Order Status",
    "Received Date",
    "Time",
    "Completed Time",
    "Time",
    "Action",
  ];
  const tableRows = [
    [
      1,
      "Kevin De Bruyne",
      "Long ass T-Shirts",
      "Shirt",
      1,
      "$5",
      "Pending",
      "Dec-28-2023",
      "1:00AM",
      "Dec-28-2023",
      "5:30PM",
      "temp",
    ],
    [
      2,
      "John Doe",
      "Very Long T-Shirts",
      "Shirt",
      1,
      "$5",
      "Pending",
      "Dec-28-2023",
      "1:00AM",
      "Dec-28-2023",
      "5:30PM",
      "temp",
    ],
    [
      3,
      "John Doe",
      "Hat for Young Children to Wear",
      "Hat",
      1,
      "$5",
      "Pending",
      "Dec-28-2023",
      "1:00AM",
      "Dec-28-2023",
      "5:30PM",
      "temp",
    ],
    [
      4,
      "John Doe",
      "Long T-Shirts",
      "Shirt",
      1,
      "$5",
      "Pending",
      "Dec-28-2023",
      "1:00AM",
      "Dec-28-2023",
      "5:30PM",
      "temp",
    ],
    [
      5,
      "John Doe",
      "Long T-Shirts",
      "Shirt",
      1,
      "$5",
      "Pending",
      "Dec-28-2023",
      "1:00AM",
      "Dec-28-2023",
      "5:30PM",
      "temp",
    ],
    [
      6,
      "John Doe",
      "Long T-Shirts",
      "Shirt",
      1,
      "$5",
      "Pending",
      "Dec-28-2023",
      "1:00AM",
      "Dec-28-2023",
      "5:30PM",
      "temp",
    ],
    [
      7,
      "John Doe",
      "Long T-Shirts",
      "Shirt",
      1,
      "$5",
      "Pending",
      "Dec-28-2023",
      "1:00AM",
      "Dec-28-2023",
      "5:30PM",
      "temp",
    ],
  ];

  return (
    <div className="flex-[5] ml-2 mr-7 flex-col">
      <div className="flex items-end justify-end h-[15vh] mb-3">
        <button className="w-[15%] border border-border bg-primary text-lg text-white font-bold p-1 rounded-lg">
          Print All
        </button>
      </div>
      <hr className="border-border border-t-2 mb-1"></hr>
      <hr className="border-border border-t-2 mb-1"></hr>
      <div className="mb-1">
        <Table headers={tableHeaders} rows={tableRows}></Table>
      </div>
      <hr className="border-border border-t-2 mb-1"></hr>
      <hr className="border-border border-t-2 mb-1"></hr>
    </div>
  );
}

export default ShopHistory;