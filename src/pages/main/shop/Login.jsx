import React from "react";
import ImgPlaceholder from "../../../assets/images/club_logo.png";
import { Link, Navigate } from "react-router-dom";
// import PropTypes from "prop-types";
import { LoginContext } from "../../../state/Provider";
import axios from "axios";

export default function Login() {
  const [loginState, setLoginState] = React.useContext(LoginContext);
  return (
    <>
      {!loginState.userID ? (
        <div className="">
          <div className="mt-[60.09px] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src={ImgPlaceholder}
                className="aspect-square h-[92px] mt-[30px]"
                alt="logo"
              />
            </div>
            <LoginForm />
            <Link
              className="flex justify-center text-xl font-bold text-red-600 hover:underline"
              to="/register"
            >
              Become a member
            </Link>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

function LoginForm() {
  const [loginState, setLoginState] = React.useContext(LoginContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <form className="w-1/2 flex flex-col">
      <div className="mb-[30px]">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="email"
          name="email"
          id="email"
          placeholder="Your registered email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
          required
        ></input>
      </div>
      <div className="flex justify-center mt-[30px] mb-[30px]">
        {loginState.userID}
        <button
          className="h-[50px] w-1/4 border text-white bg-primary text-lg font-black p-3 rounded-lg hover:bg-red-700"
          type="button"
          onClick={() => {
            axios
              .post("http://localhost:5500/login", {
                email: email,
                password: password,
              })
              .then((res) => {
                if (res.status === 200) {
                  setLoginState({
                    userID: res.data.userID,
                    isAdmin: res.data.isAdmin,
                    isLoggedIn: true,
                    username: res.data.username,
                    token: res.data.token,
                    lastLogin: Date.now(),
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          LOGIN
        </button>
      </div>
    </form>
  );
}

//   InputField.propTypes = {
//   label: PropTypes.string,
//   type: PropTypes.string,
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   handleChange: PropTypes.func,
// };

// InputField({ label, type, name, placeholder, handleChange }) {
//   return (
//     <div>
//       <div className="text-xl font-bold">{label}</div>
//       <input
//         className="h-[61px] w-[60vw] border-4 border-red-600 rounded-lg text-xl font-bold"
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         onChange={handleChange}
//       ></input>
//     </div>
//   );
// }
