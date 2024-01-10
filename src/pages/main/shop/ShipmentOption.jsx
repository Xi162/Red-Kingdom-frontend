import React, { useContext, useState } from "react";

import PropTypes from "prop-types";
import { LoginContext } from "../../../state/Provider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ShipmentOption() {
  // const historyNav = ["Main", title, "Details", "Checkout"];
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-bold mt-[20px] mb-[10px]">
          Shipment Option
        </div>
        <ShipmentForm />
      </div>
    </div>
  );
}

ShipmentOption.propTypes = {
  title: PropTypes.string,
  // item: PropTypes.object,
};

function ShipmentForm() {
  const [loginState, setLoginState] = useContext(LoginContext);
  const [address, setAddress] = useState("");
  const [receiver, setReceiver] = useState("");
  const [payment, setPayment] = useState("");
  const navigate = useNavigate();
  return (
    <form className="w-[60%] mt-[60px] flex flex-col">
      <div className="mb-[40px]">
        <label htmlFor="receiver" className="text-xl font-bold">
          Receiver
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="text"
          name="receiver"
          id="receiver"
          placeholder="Receiver's name"
          onChange={(e) => setReceiver(e.target.value)}
          required
        />
      </div>
      <div className="mb-[40px]">
        <label htmlFor="addr" className="text-xl font-bold">
          Address
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="text"
          name="addr"
          id="addr"
          placeholder="Receiver's address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="mb-[40px]">
        <label htmlFor="payment" className="text-xl font-bold">
          Payment method
        </label>
        <select
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          name="payment"
          id="payment"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          required
        >
          <option value="" disabled>
            Select payment method
          </option>
          {["Cash", "Banking"].map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mb-[50px]">
        <button
          className="w-1/4 border text-white bg-primary text-lg font-black p-3 rounded-lg hover:bg-primary"
          type="button"
          onClick={() => {
            axios
              .post(
                `http://localhost:5500/orders/user/${loginState.userID}`,
                {
                  address: address,
                  receiver_name: receiver,
                  paymentMethod: payment,
                },
                {
                  headers: {
                    Authorization: `Bearer ${loginState.token}`,
                  },
                }
              )
              .then((res) => {
                console.log(res.data);
                navigate("/shop/orders");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          CONFIRM
        </button>
      </div>
    </form>
  );
}
