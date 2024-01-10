// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../../state/Provider";
import { useParams } from "react-router-dom";
import ProductTable from "../../../components/shop/admin/ProductTable";

function OrderDetailAdmin() {
  const { orderID } = useParams();
  const [loginState, setLoginState] = useContext(LoginContext);
  const [tableRows, setTableRows] = useState([]);
  const [order, setOrder] = useState({});
  const [status, setStatus] = useState("");
  const [deliverDate, setDeliverDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");
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
        setTotalPrice(res.data.totalPrice);
        setPaymentMethod(res.data.paymentMethod);
        setAddress(res.data.address);
        setReceiverName(res.data.receiver_name);
        setStatus(res.data.status);
        setDeliverDate(
          res.data.deliverDate
            ? new Date(res.data.deliverDate).toDateString()
            : "Waiting"
        );
      })
      .catch((err) => {
        console.log(err);
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
    <div className="border-[1px] border-solid border-border mt-[10px] w-full ">
      <div className="mt-[10px] flex-col w-full flex items-center">
        <div className="w-full flex justify-end">
          <button
            className="btn bg-primary text-white font-bold mr-4"
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            Edit
          </button>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">ID</label>
          <div className="flex gap-8">
            <input
              className="text-box"
              type="text"
              value={orderID}
              disabled={true}
            />
          </div>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">User ID</label>
          <div className="flex gap-8">
            <input
              className="text-box"
              type="text"
              value={order.UserId}
              disabled={true}
            />
          </div>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">Receiver name</label>
          <div className="flex gap-8">
            <input
              className="text-box"
              type="text"
              onChange={(e) => {
                setReceiverName(e.target.value);
              }}
              value={receiverName}
              disabled={editMode}
            />
          </div>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">Address</label>
          <div className="flex gap-8">
            <input
              className="text-box"
              type="text"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
              disabled={editMode}
            />
          </div>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">Order date</label>
          <div className="flex gap-8">
            <input
              className="text-box"
              type="text"
              value={new Date(order.createdAt).toDateString()}
              disabled={true}
            />
          </div>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">Payment Method</label>
          <div className="flex gap-8">
            <select
              className="text-box"
              type="text"
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
              value={paymentMethod}
              disabled={editMode}
            >
              <option value="Cash">Cash</option>
              <option value="Banking">Banking</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">Total Price</label>
          <div className="flex gap-8">
            <input
              className="text-box"
              type="text"
              onChange={(e) => {
                setTotalPrice(e.target.value);
              }}
              value={totalPrice}
              disabled={editMode}
            />
          </div>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">Status</label>
          <div className="flex gap-8">
            <select
              className="text-box"
              type="text"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              value={status}
              disabled={editMode}
            >
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col m-5 ml-20 w-full">
          <label className="font-black text-xl">Deliver date</label>
          <div className="flex gap-8">
            <input
              className="text-box"
              type="text"
              onChange={(e) => {
                setDeliverDate(e.target.value);
              }}
              value={deliverDate}
              disabled={editMode}
            />
          </div>
        </div>
        <ProductTable rows={tableRows}></ProductTable>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 mr-10 mb-16">
        {message && <div className="">{message}</div>}
        <button
          className="button-add "
          onClick={() => {
            axios
              .put(
                `http://localhost:5500/orders/${orderID}`,
                {
                  status: status,
                  deliverDate: deliverDate,
                  totalPrice: totalPrice,
                  paymentMethod: paymentMethod,
                  address: address,
                  receiver_name: receiverName,
                },
                {
                  headers: {
                    Authorization: "Bearer " + loginState.token,
                  },
                }
              )
              .then((res) => {
                console.log(res.data);
                setEditMode(false);
                setMessage("Saved");
              })
              .catch((err) => {
                console.log(err);
                setMessage(err.response.data.message);
              });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default OrderDetailAdmin;
