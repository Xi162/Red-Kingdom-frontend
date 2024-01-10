import { Route, Routes } from "react-router-dom";

import Article from "../../pages/main/info/Article";
import HomePage from "../../pages/main/info/HomePage";
import Navbar from "../../components/info/header";
import Login from "../../pages/main/shop/Login";
import Register from "../../pages/main/shop/Register";

export default function InfoRouter({}) {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="latest" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Need work: pass id as prop into Article component */}
        <Route path="article/*" element={<Article />} />
      </Routes>
    </>
  );
}
