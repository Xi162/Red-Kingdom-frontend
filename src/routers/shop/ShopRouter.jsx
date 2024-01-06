// import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import ProtectedPage from "./ProtectedPage";

import ShopMain from "../../pages/main/shop/ShopMain";
import Login from "../../pages/main/shop/Login";
import Register from "../../pages/main/shop/Register";
import ShopCategory from "../../pages/main/shop/ShopCategory";
import ShopItem from "../../pages/main/shop/ShopItem";
import Orders from "../../pages/main/shop/Orders";
import OrderDetails from "../../pages/main/shop/OrderDetails";
import Cart from "../../pages/main/shop/Cart";
import ShipmentOption from "../../pages/main/shop/ShipmentOption";

const ShopRouter = () => {
  return (
    <>
      <div className="navbar navbar-sticky bg-primary font-bold z-50">
        <div className="navbar-start">
          <NavLink className="navbar-item text-inherit" to="">
            Shop
          </NavLink>
        </div>
        <div className="navbar-center">
          <NavLink className="navbar-item text-inherit" to="officials">
            Officials
          </NavLink>
          <NavLink className="navbar-item text-inherit" to="training">
            Training
          </NavLink>
          <NavLink className="navbar-item text-inherit" to="hats">
            Hats
          </NavLink>
          <NavLink className="navbar-item text-inherit" to="bags">
            Bags
          </NavLink>
          <NavLink className="navbar-item text-inherit" to="souvenirs">
            Souvenirs
          </NavLink>
        </div>
        <div className="navbar-end">
          <NavLink className="navbar-item text-inherit" to="cart">
            Cart
          </NavLink>
          <NavLink className="navbar-item text-inherit" to="orders">
            Orders
          </NavLink>
          <NavLink className="navbar-item text-inherit" to="login">
            Login
          </NavLink>
          <NavLink className="navbar-item text-inherit" to="register">
            Register
          </NavLink>
        </div>
      </div>

      <div className="mt-[60px] z-0">
        <Routes>
          <Route exact path="/" element={<ShopMain />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="products/:productID" element={<ShopItem />} />
          <Route exact path=":category" element={<ShopCategory />} />
          <Route
            exact
            path="orders"
            element={
              <ProtectedPage>
                <Orders />
              </ProtectedPage>
            }
          />
          <Route
            exact
            path="orders/:orderID"
            element={
              <ProtectedPage>
                <OrderDetails />
              </ProtectedPage>
            }
          />
          <Route
            exact
            path="cart"
            element={
              <ProtectedPage>
                <Cart />
              </ProtectedPage>
            }
          />
          <Route
            exact
            path="shipment"
            element={
              <ProtectedPage>
                <ShipmentOption />
              </ProtectedPage>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default ShopRouter;
