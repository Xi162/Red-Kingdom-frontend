import { Routes, Route } from "react-router-dom";
import ShopRouter from "./shop/ShopRouter";
import AdminRouter from "./admin/AdminRouter";
import InfoRouter from "./info/InfoRouter";
import ProtectedAdmin from "./ProtectedAdmin";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="shop/*" element={<ShopRouter />} />
      <Route
        path="admin/*"
        element={
          <ProtectedAdmin>
            <AdminRouter />
          </ProtectedAdmin>
        }
      />
      <Route path="/*" element={<InfoRouter />} />
    </Routes>
  );
}
