import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Select from "react-select";
import "/src/index.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  return (
    <div className="">
      <div className="flex flex-col flex-wrap content-center justify-center">
        <div className="w-[60vw] border-gray-600">
          <div className="text-4xl font-bold mt-[20px] mb-[50px]">Register</div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

function RegisterForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className="mb-[50px] flex flex-col">
      <div className="flex justify-between mb-[40px]">
        <div>
          <label htmlFor="fname" className="font-bold">
            First name
          </label>
          <input
            className="h-12 w-[28vw] border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
            type="text"
            name="fName"
            placeholder="Your first name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            id="fname"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="lname" className="font-bold">
            Last name
          </label>
          <input
            className="h-12 w-[28vw] border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
            type="text"
            name="lName"
            placeholder="Your last name"
            id="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          ></input>
        </div>
      </div>
      <div className="flex justify-between mb-[40px]">
        <div className="w-1/2">
          <label htmlFor="dob" className="font-bold">
            Date of birth
          </label>
          <br />
          <DatePicker
            className="h-12 w-[28vw] border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
            selected={dob}
            placeholderText="Select..."
            id="dob"
            value={dob}
            onChange={(date) => setDob(date)}
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="gender" className="font-bold">
            Gender
          </label>
          <br />
          <select
            className="h-12 w-[28vw] border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Choose your gender</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"None"}>Prefer not to say</option>
          </select>
        </div>
      </div>
      <div className="mb-[40px]">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </div>
      <div className="mb-[40px]">
        <label htmlFor="phone" className="font-bold">
          Phone
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="text"
          name="phone"
          id="phone"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        ></input>
      </div>
      <div className="mb-[40px]">
        <label htmlFor="addr" className="font-bold">
          Address
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="text"
          name="addr"
          placeholder="Your address"
          id="addr"
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
          required
        ></input>
      </div>
      <div className="mb-[40px]">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
      </div>
      <div className="mb-[40px]">
        <label htmlFor="re_password" className="font-bold">
          Confirm password
        </label>
        <input
          className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
          type="password"
          name="re_password"
          id="re_password"
          placeholder="Enter password again"
          value={re_password}
          onChange={(e) => setRe_password(e.target.value)}
          required
        ></input>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-danger text-primary">{message}</div>
        <button
          className="h-1/2 w-1/4 border text-white bg-primary text-lg font-black p-3 rounded-lg hover:bg-red-700"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (password == re_password) {
              axios
                .post("http://localhost:5500/signup", {
                  // firstName: req.body.firstName,
                  // lastName: req.body.lastName,
                  // Email: req.body.Email,
                  // gender: req.body.gender,
                  // DOB: req.body.DOB,
                  // password: hashedPassword,
                  // phoneNumber: req.body.phoneNumber,
                  // address: req.body.address,
                  firstName: fname,
                  lastName: lname,
                  Email: email,
                  gender: gender,
                  DOB: dob,
                  password: password,
                  phoneNumber: phone,
                  address: addr,
                })
                .then((res) => {
                  console.log(res);
                  setMessage("User created");
                })
                .catch((err) => {
                  console.log(err);
                  setMessage("User not created");
                });
            } else {
              setMessage("Password not match");
            }
          }}
        >
          REGISTER
        </button>
      </div>
    </form>
  );
}

// class RegisterForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: {
//         fName: "",
//         lName: "",
//         dob: "",
//         gender: "None",
//         email: "",
//         phone: "",
//         addr: "",
//         password: "",
//         re_password: "",
//       },
//       errors: {},
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleChangeDate = this.handleChangeDate.bind(this);
//     this.handleChangeGender = this.handleChangeGender.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;
//     this.setState({ input });
//     this.validate();
//   }

//   handleChangeDate(date) {
//     let input = this.state.input;
//     input.dob = date;
//     this.setState({ input });
//     console.log(this.state.input.dob);
//   }

//   handleChangeGender(event) {
//     let input = this.state.input;
//     input.gender = event.target.value;
//     this.setState({ input });
//     console.log(this.state.input.gender);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     if (this.validate()) {
//       console.log("You created a new account!");
//       console.log(
//         "User info:\n" +
//           "First name: " +
//           this.state.input.fName +
//           "\n" +
//           "Last name: " +
//           this.state.input.lName +
//           "\n" +
//           "DoB: " +
//           this.state.input.dob +
//           "\n" +
//           "Gender: " +
//           this.state.input.gender +
//           "\n" +
//           "Email: " +
//           this.state.input.email +
//           "\n" +
//           "Phone: " +
//           this.state.input.phone +
//           "\n" +
//           "Address: " +
//           this.state.input.addr +
//           "\n" +
//           "Password: " +
//           this.state.input.password +
//           "\n"
//       );
//     }
//   }

//   validate() {
//     let input = this.state.input;
//     let errors = {};
//     let isValid = true;
//     if (
//       typeof input["password"] !== "undefined" &&
//       typeof input["re_password"] !== "undefined"
//     ) {
//       if (input["password"] != input["re_password"]) {
//         isValid = false;
//         errors["password"] = "Confirm Password is not matched!";
//       }
//     }

//     this.setState({ errors: errors });
//     return isValid;
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="mb-[50px] flex flex-col">
//         <div className="flex justify-between mb-[40px]">
//           <div>
//             <label htmlFor="fname" className="font-bold">
//               First name
//             </label>
//             <input
//               className="h-12 w-[28vw] border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//               type="text"
//               name="fName"
//               placeholder="Your first name"
//               onChange={this.handleChange}
//               id="fname"
//               required
//             ></input>
//           </div>
//           <div>
//             <label htmlFor="lname" className="font-bold">
//               Last name
//             </label>
//             <input
//               className="h-12 w-[28vw] border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//               type="text"
//               name="lName"
//               placeholder="Your last name"
//               id="lname"
//               onChange={this.handleChange}
//               required
//             ></input>
//           </div>
//         </div>
//         <div className="flex justify-between mb-[40px]">
//           <div className="w-1/2">
//             <label htmlFor="dob" className="font-bold">
//               Date of birth
//             </label>
//             <br />
//             <DatePicker
//               className="h-12 w-[28vw] border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//               selected={this.state.input.dob}
//               placeholderText="Select..."
//               id="dob"
//               onChange={(date) => this.handleChangeDate(date)}
//               required
//             />
//           </div>
//           <div className="w-1/2">
//             <label htmlFor="gender" className="font-bold">
//               Gender
//             </label>
//             <br />
//             <select
//               className="h-12 w-[28vw] border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//               value={this.state.input.gender}
//               id="gender"
//               onChange={(e) => this.handleChangeGender(e)}
//               required
//             >
//               <option value={"Male"}>Male</option>
//               <option value={"Female"}>Female</option>
//               <option value={"None"}>Prefer not to say</option>
//             </select>
//           </div>
//         </div>
//         <div className="mb-[40px]">
//           <label htmlFor="email" className="font-bold">
//             Email
//           </label>
//           <input
//             className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Your email"
//             onChange={this.handleChange}
//             required
//           ></input>
//         </div>
//         <div className="mb-[40px]">
//           <label htmlFor="phone" className="font-bold">
//             Phone
//           </label>
//           <input
//             className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//             type="text"
//             name="phone"
//             id="phone"
//             placeholder="Your phone number"
//             onKeyPress={(event) => {
//               if (!/[0-9]/.test(event.key)) {
//                 event.preventDefault();
//               }
//             }}
//             onChange={this.handleChange}
//             required
//           ></input>
//         </div>
//         <div className="mb-[40px]">
//           <label htmlFor="addr" className="font-bold">
//             Address
//           </label>
//           <input
//             className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//             type="text"
//             name="addr"
//             placeholder="Your address"
//             id="addr"
//             onChange={this.handleChange}
//             required
//           ></input>
//         </div>
//         <div className="mb-[40px]">
//           <label htmlFor="password" className="font-bold">
//             Password
//           </label>
//           <input
//             className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Your password"
//             onChange={this.handleChange}
//             required
//           ></input>
//         </div>
//         <div className="mb-[40px]">
//           <label htmlFor="re_password" className="font-bold">
//             Confirm password
//           </label>
//           <input
//             className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
//             type="password"
//             name="re_password"
//             id="re_password"
//             placeholder="Enter password again"
//             onChange={this.handleChange}
//             required
//           ></input>
//           <div className="text-danger text-primary">
//             {this.state.errors.password}
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button
//             className="h-1/2 w-1/4 border text-white bg-primary text-lg font-black p-3 rounded-lg hover:bg-red-700"
//             type="submit"
//           >
//             REGISTER
//           </button>
//         </div>
//       </form>
//     );
//   }
// }
