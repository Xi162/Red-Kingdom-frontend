// import React from 'react'
// import { Link } from 'react-router-dom'
import OrdersTable from "/src/components/shop/user/OrdersTable";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../../state/Provider";
import axios from "axios";

function Orders() {
  const tableHeaders = ["Order ID", "Purchase Date", "Status", "Price"];
  const [loginState, setLoginState] = useContext(LoginContext);
  const [tableRows, setTableRows] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5500/orders/user/${loginState.userID}`, {
        headers: {
          Authorization: "Bearer " + loginState.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTableRows(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setLoginState({
            userID: null,
            username: null,
            token: null,
            lastLogin: Date.now(),
          });
          navigate("/login");
        }
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="text-center text-[40px] font-bold">
          {" "}
          {/* Title */}
          <h1 className="border-b-8 border-primary inline-block">Orders</h1>
        </div>
      </div>
      <div className="ml-10 mr-10">
        {" "}
        {/* table-wrapper */}
        <OrdersTable headers={tableHeaders} rows={tableRows}></OrdersTable>
      </div>
    </div>
  );
}

export default Orders;
