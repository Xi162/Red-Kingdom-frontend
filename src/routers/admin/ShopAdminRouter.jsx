import { Routes, Route, NavLink } from "react-router-dom";
import ShopHistory from "../../pages/admin/shop/ShopHistory";
import ShopManagement from "../../pages/admin/shop/ShopManagement";
import OrderDetailAdmin from "../../pages/admin/shop/OrderDetailAdmin";
export default function ShopAdminRouter() {
  return (
    <div className="flex flex-row gap-4">
      <div className="w-full max-w-[18rem]">
        <aside className="sidebar h-full justify-start">
          <div className="flex flex-col"></div>
          <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
            <nav className="menu rounded-md">
              <section className="menu-section">
                <ul className="menu-items ">
                  <li className="menu-item p-0 h-8">
                    <NavLink
                      to="orders"
                      className="flex gap-2 w-full h-full items-center px-2 text-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Orders
                    </NavLink>
                  </li>

                  <li className="menu-item p-0 h-8 ">
                    <NavLink
                      to="products"
                      className="flex gap-2 w-full h-full items-center px-2 text-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Products
                    </NavLink>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
        </aside>
      </div>
      <Routes>
        <Route path="orders" element={<ShopHistory />} />
        <Route path="products/*" element={<ShopManagement />} />
        <Route path="orders/:orderID" element={<OrderDetailAdmin />} />
      </Routes>
    </div>
  );
}
