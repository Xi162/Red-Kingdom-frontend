import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../state/Provider";

export default function ProtectedPage({ children }) {
  const [loginState, setLoginState] = useContext(LoginContext);
  return (
    <>
      {!loginState.userID ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <> {children} </>
      )}
    </>
  );
}
