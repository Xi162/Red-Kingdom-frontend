// import React from 'react'
// import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../../state/Provider";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderDetailsTable from "../../../components/shop/user/OrderDetailsTable";
import { useNavigate } from "react-router-dom";

function OrderDetails() {
  const navigate = useNavigate();
  const { orderID } = useParams();
  const tableHeaders = ["Product", "Quantity", "Size", "Price"];
  const [loginState, setLoginState] = useContext(LoginContext);
  const [tableRows, setTableRows] = useState([]);
  const [order, setOrder] = useState({});
  const [numOfProducts, setNumOfProducts] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:5500/orders/${orderID}`, {
        headers: {
          Authorization: "Bearer " + loginState.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
        setTableRows(res.data.products);
        setNumOfProducts(
          res.data.products.reduce((accumulator, item) => {
            return accumulator + item.quantity;
          }, 0)
        );
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
          <h1 className="border-b-8 border-primary inline-block">Order</h1>
        </div>
      </div>
      <div className="mb-2 mt-2 text-center text-[20px] font-black">
        {" "}
        {/* Breadcrumb */}
        <span>Purchase date: {new Date(order.createdAt).toDateString()}</span>
      </div>
      <div className="ml-12 mb-12">
        <div className="mt-10 text-[20px] font-black">
          <span>Receiver: {order.receiver_name}</span>
        </div>
        <div className="mt-10 text-[20px] font-black">
          <span>Address: {order.address}</span>
        </div>
        <div className="mt-10 text-[20px] font-black">
          <span>Payment Method: {order.paymentMethod}</span>
        </div>
        <div className="mt-10 text-[20px] font-black">
          <span className="text-[20px]">
            Number of products: {numOfProducts}
          </span>
        </div>
      </div>
      <div className="ml-10 mr-10 mb-10">
        {" "}
        {/* table-wrapper */}
        <OrderDetailsTable headers={tableHeaders} rows={tableRows} />
        {/* <CartTable headers={tableHeaders} rows={tableRows}></CartTable> */}
        <div className="flex justify-between mt-5 font-black">
          <div className="text-[25px] font-black">TOTAL</div>
          <div className="text-[25px]">$ {order.totalPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
