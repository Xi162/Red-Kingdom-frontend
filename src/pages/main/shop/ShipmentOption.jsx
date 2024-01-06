import React from "react";

import PropTypes from "prop-types";

export default function ShipmentOption() {
  // const historyNav = ["Main", title, "Details", "Checkout"];
  return (
    <div className="">
      <div className="h-[60.09px]"></div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-bold mt-[20px] mb-[10px]">
          Shipment Option
        </div>
        <ShipmentForm />
      </div>
    </div>
  );
}

ShipmentOption.propTypes = {
  title: PropTypes.string,
  // item: PropTypes.object,
};

class ShipmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        receiver: "",
        addr: "",
        phone: "",
        payment: "Cash",
      },
      error: {},
    };
    this.paymentMethod = ["Cash", "Momo", "Zalo Pay", "Online banking"];

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePayment = this.handleChangePayment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({ input });
  }

  handleChangePayment(event) {
    let input = this.state.input;
    input.payment = event.target.value;
    this.setState({ input });
    console.log(this.state.input.payment);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Success!");
    console.log(
      "Receiver: " +
        this.state.input.receiver +
        "\nAddress: " +
        this.state.input.addr +
        "\nPhone number: " +
        this.state.input.phone +
        "\nPayment method: " +
        this.state.input.payment
    );
  }

  render() {
    return (
      <form className="w-[60%] mt-[60px]" onSubmit={this.handleSubmit}>
        <div className="mb-[40px]">
          <label htmlFor="receiver" className="text-xl font-bold">
            Receiver
          </label>
          <input
            className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
            type="text"
            name="receiver"
            id="receiver"
            placeholder="Receiver's name"
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="mb-[40px]">
          <label htmlFor="addr" className="text-xl font-bold">
            Address
          </label>
          <input
            className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
            type="text"
            name="addr"
            id="addr"
            placeholder="Receiver's address"
            onChange={this.handleChange}
            required
          ></input>
          {/* <div className="text-xl font-bold">Address</div>
          <input
            className="h-[61px] w-[100%] border-4 border-red-600 rounded-lg text-xl font-bold"
            type="text"
            name="addr"
            placeholder="Receiver's address"
            onChange={this.handleChange}
            required
          ></input> */}
        </div>
        <div className="mb-[40px]">
          <label htmlFor="phone" className="text-xl font-bold">
            Phone
          </label>
          <input
            className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
            type="text"
            name="phone"
            id="phone"
            placeholder="Receiver's phone number"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={this.handleChange}
            required
          ></input>
          {/* <div className="text-xl font-bold">Phone</div>
          <input
            className="h-[61px] w-[100%] border-4 border-red-600 rounded-lg text-xl font-bold"
            type="text"
            name="phone"
            placeholder="Receiver's phone number"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={this.handleChange}
            required
          ></input> */}
        </div>
        <div className="mb-[40px]">
          <label htmlFor="payment" className="text-xl font-bold">
            Payment method
          </label>
          <select
            className="h-12 w-full border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2"
            name="payment"
            id="payment"
            value={this.state.input.payment}
            onChange={this.handleChangePayment}
            required
          >
            {this.paymentMethod.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center mb-[50px]">
          <button
            className="w-1/4 border text-white bg-primary text-lg font-black p-3 rounded-lg hover:bg-primary"
            type="submit"
          >
            CONFIRM
          </button>
        </div>
      </form>
    );
  }
}
