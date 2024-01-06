import { Navigate } from "react-router-dom";

export default function ProtectedPage({ children }) {
  let isAuth = 1;
  return (
    <>{!isAuth ? <Navigate to="/login" replace={true} /> : <> {children} </>}</>
  );
}
