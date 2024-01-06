// import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
// import {useAsyncError} from "react-router-dom"
// import NavbarAdmin from '../NavbarAdmin'
// import Sidebar from '../Sidebar'
import ShopAdd from "/src/components/shop/admin/ShopAdd";
import ShopUpdate from "/src/components/shop/admin/ShopUpdate";
import { useState } from "react";

function ShopManagement() {
  const [isSelected, setIsSelected] = useState(true);

  const handleSelectedAdd = () => {
    setIsSelected(true);
  };

  const handleSelectedUpdate = () => {
    setIsSelected(false);
  };

  return (
    <div className="flex-[4] ml-2 mr-7 mt-4">
      <Link
        className={isSelected ? "button-pressed" : "button-unpressed"}
        to=""
        onClick={handleSelectedAdd}
      >
        Add
      </Link>
      <Link
        className={!isSelected ? "button-pressed" : "button-unpressed"}
        to="update"
        onClick={handleSelectedUpdate}
      >
        Update
      </Link>
      <Routes>
        <Route path="/" element={<ShopAdd />}></Route>
        <Route path="update" element={<ShopUpdate />}></Route>
      </Routes>
    </div>
  );
}

export default ShopManagement;
