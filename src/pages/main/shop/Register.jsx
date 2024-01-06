import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Select from "react-select";
import "/src/index.css";

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

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        fName: "",
        lName: "",
        dob: "",
        gender: "None",
        email: "",
        phone: "",
        addr: "",
        password: "",
        re_password: "",
      },
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({ input });
    this.validate();
  }

  handleChangeDate(date) {
    let input = this.state.input;
    input.dob = date;
    this.setState({ input });
    console.log(this.state.input.dob);
  }

  handleChangeGender(event) {
    let input = this.state.input;
    input.gender = event.target.value;
    this.setState({ input });
    console.log(this.state.input.gender);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log("You created a new account!");
      console.log(
        "User info:\n" +
          "First name: " +
          this.state.input.fName +
          "\n" +
          "Last name: " +
          this.state.input.lName +
          "\n" +
          "DoB: " +
          this.state.input.dob +
          "\n" +
          "Gender: " +
          this.state.input.gender +
          "\n" +
          "Email: " +
          this.state.input.email +
          "\n" +
          "Phone: " +
          this.state.input.phone +
          "\n" +
          "Address: " +
          this.state.input.addr +
          "\n" +
          "Password: " +
          this.state.input.password +
          "\n"
      );
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (
      typeof input["password"] !== "undefined" &&
      typeof input["re_password"] !== "undefined"
    ) {
      if (input["password"] != input["re_password"]) {
        isValid = false;
        errors["password"] = "Confirm Password is not matched!";
      }
    }

    this.setState({ errors: errors });
    return isValid;
  }

  render() {
    // const genderOptions = [
    //   { value: "Male", label: "Male" },
    //   { value: "Female", label: "Female" },
    //   { value: "None", label: "Prefer not to say" },
    // ];

    // const style = {
    //     control: base => ({
    //       ...base,
    //       border: 4,
    //       // This line disable the blue border
    //       boxShadow: "none",
    //       height: 61,
    //         width: 28,
    //     //   h-[61px] w-[28vw] border-4 border-primary rounded-lg text-xl font-bold
    //     })
    //   };
    return (
      <form onSubmit={this.handleSubmit} className="mb-[50px] flex flex-col">
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              selected={this.state.input.dob}
              placeholderText="Select..."
              id="dob"
              onChange={(date) => this.handleChangeDate(date)}
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
              value={this.state.input.gender}
              id="gender"
              onChange={(e) => this.handleChangeGender(e)}
              required
            >
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
            onChange={this.handleChange}
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
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            required
          ></input>
          <div className="text-danger text-primary">
            {this.state.errors.password}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="h-1/2 w-1/4 border text-white bg-primary text-lg font-black p-3 rounded-lg hover:bg-red-700"
            type="submit"
          >
            REGISTER
          </button>
        </div>
      </form>
    );
  }
}
