// import React from "react";
import Table from "/src/components/shop/admin/Table";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "/src/state/Provider";
import axios from "axios";

function ShopHistory() {
  const tableHeaders = [
    "ID",
    "Receiver Name",
    "Address",
    "Total Price",
    "Status",
    "Received Date",
    "Completed Date",
  ];
  const [loginState, setLoginState] = useContext(LoginContext);
  const [tableRows, setTableRows] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5500/orders`, {
        headers: {
          Authorization: "Bearer " + loginState.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTableRows(res.data);
      });
  }, []);

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
