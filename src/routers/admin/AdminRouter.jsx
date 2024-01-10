// import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import ShopAdminRouter from "./ShopAdminRouter";
import CMSRouter from "./CMSRouter";

const AdminRouter = () => {
  return (
    <>
      <div className="navbar navbar-sticky bg-primary text-white tracking-wider font-bold shadow-md">
        <div className="navbar-start">
          <NavLink className="navbar-item text-inherit" to="/">
            Home
          </NavLink>
        </div>
        <div className="navbar-center">
          <NavLink className="navbar-item text-inherit text-xl" to="/admin/CMS">
            CMS
          </NavLink>
          <NavLink
            className="navbar-item text-inherit text-xl"
            to="/admin/shop"
          >
            Shop
          </NavLink>
        </div>
      </div>
      <div className="mt-20">
        <Routes>
          <Route path="shop/*" element={<ShopAdminRouter />} />
          <Route path="CMS/*" element={<CMSRouter />} />
        </Routes>
      </div>
    </>
  );
};

export default AdminRouter;
