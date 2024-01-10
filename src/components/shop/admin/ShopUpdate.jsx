// import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../../state/Provider";

function ShopUpdate() {
  const [loginState, setLoginState] = useContext(LoginContext);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="border-[1px] border-solid border-border mt-[10px]">
      <div className="mt-[10px] flex flex-col">
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">ID</label>
          <div className="flex gap-8">
            <input
              className="text-box"
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="btn bg-primary"
              onClick={() => {
                axios
                  .get(`http://localhost:5500/products/${search}`)
                  .then((res) => {
                    setProduct(res.data);
                    setName(res.data.name);
                    setPrice(res.data.price);
                    setDesc(res.data.description);
                  })
                  .catch((err) => {
                    console.log(err);
                    setMessage(err.response.data.msg);
                  });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
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
        <div className="flex flex-row justify-evenly mb-5">
          <button
            className="button-add"
            onClick={() => {
              axios
                .put(
                  `http://localhost:5500/products/${search}`,
                  {
                    name: name,
                    price: price,
                    description: desc,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${loginState.token}`,
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data);
                  setMessage(res.data.msg);
                })
                .catch((err) => {
                  console.log(err);
                  setMessage(err.response.data.msg);
                });
            }}
          >
            Update Product
          </button>
          <button
            className="button-add"
            onClick={() => {
              axios
                .delete(`http://localhost:5500/products/${search}`, {
                  headers: {
                    Authorization: `Bearer ${loginState.token}`,
                  },
                })
                .then((res) => {
                  console.log(res.data);
                  setMessage(res.data.msg);
                })
                .catch((err) => {
                  console.log(err);
                  setMessage(err.response.data.msg);
                });
            }}
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopUpdate;
