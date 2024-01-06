import React from "react";
import ImgPlaceholder from "../../../assets/images/icon.png";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

export default function Login() {
  return (
    <div className="">
      <div className="mt-[60.09px] flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            src={ImgPlaceholder}
            className="aspect-square h-[92px] mt-[30px]  border-2 border-gray-600"
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
  );
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({ username: event.target.username, password: event.target.password });
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("You logged in!");
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);
    event.preventDefault(); // prevent submitting the form
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="w-1/2 flex flex-col">
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="flex justify-center mt-[30px] mb-[30px]">
          <button
            className="h-[50px] w-1/4 border text-white bg-primary text-lg font-black p-3 rounded-lg hover:bg-red-700"
            type="submit"
          >
            LOGIN
          </button>
        </div>
      </form>
    );
  }
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
