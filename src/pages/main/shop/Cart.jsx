// import React from 'react'
import CartTable from "/src/components/shop/user/CartTable";
// import { Link } from 'react-router-dom'
import Breadcrumb from "/src/components/shop/user/Breadcrumb";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../../state/Provider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [loginState, setLoginState] = useContext(LoginContext);
  const [tableRows, setTableRows] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5500/cart/${loginState.userID}`, {
        headers: {
          Authorization: "Bearer " + loginState.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTableRows(res.data);
        // totalPrice = tableRows.reduce((accumulator, item) => {
        //   return accumulator + item.price * item.quantity;
        // }, 0);
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

  const tableHeaders = ["Product", "Quantity", "Size", "Price"];
  // ['Previously previous page', 'Previous page', ..., 'Current page']
  const historyNav = ["Main", "Kit", "Details", "Cart"];

  return (
    <div>
      <Breadcrumb history={historyNav}></Breadcrumb>
      <div className="ml-10 mr-10">
        {" "}
        {/* table-wrapper */}
        <CartTable headers={tableHeaders} rows={tableRows}></CartTable>
        <div className="flex items-end justify-end mt-5 mb-10">
          <button
            className="w-[20%] border border-border text-white bg-primary text-[25px] font-black p-3 rounded-lg hover:bg-red-700"
            onClick={() => {
              navigate("/shop/shipment");
            }}
          >
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
