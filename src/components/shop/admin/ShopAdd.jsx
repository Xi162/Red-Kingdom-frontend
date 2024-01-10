// import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../../state/Provider";

function ShopUpdate() {
  const [loginState, setLoginState] = useContext(LoginContext);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="border-[1px] border-solid border-border mt-[10px]">
      <div className="mt-[10px] flex flex-col">
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">Category</label>
          <select
            className="text-box"
            name=""
            id=""
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            {["Souvenir", "Bag", "Hat", "Official", "Training"].map(
              (itemSize) => (
                <option key={itemSize} value={itemSize}>
                  {itemSize}
                </option>
              )
            )}
          </select>
        </div>
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">Name</label>
          <input
            className="text-box"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">Price</label>
          <input
            className="text-box"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">Description</label>
          <textarea
            className="text-box"
            id=""
            cols="30"
            rows="10"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
        </div>
        {message && <div className="flex flex-col m-5 ml-20">{message}</div>}
        <div className="flex flex-row justify-center mb-5">
          <button
            className="button-add"
            onClick={() => {
              axios
                .post(
                  `http://localhost:5500/products/`,
                  {
                    name: name,
                    price: price,
                    description: desc,
                    type: type,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${loginState.token}`,
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data);
                  setMessage("Product added");
                })
                .catch((err) => {
                  console.log(err);
                  setMessage("Product not added");
                });
            }}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopUpdate;
