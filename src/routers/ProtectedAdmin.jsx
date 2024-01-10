import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../state/Provider";

export default function ProtectedAdmin({ children }) {
  const [loginState, setLoginState] = useContext(LoginContext);
  return (
    <>
      {!loginState || !loginState.isAdmin ? (
        <Navigate to="/" replace={true} />
      ) : (
        <> {children} </>
      )}
    </>
  );
}
