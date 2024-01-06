import React from "react";
import ShirtImg from "/src/assets/images/shirt_placeholder.jpeg";
import PropTypes from "prop-types";
import "/src/index.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ShopItem() {
  const [item, setItem] = React.useState({});
  const { productID } = useParams();

  React.useEffect(() => {
    axios.get(`http://localhost:5500/products/${productID}`).then((res) => {
      console.log(res);
      setItem(res.data);
    });
  }, [productID]);
  const [chosenSize, setSize] = React.useState(item.size);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Successfully added to cart!\n" +
        "Size: " +
        chosenSize +
        "\n" +
        "Price: $" +
        item.price
    );
  };
  return (
    <div className="">
      <div className="flex justify-between items-center h-[24vw] max-h-[315px] pl-[10vw] pr-[10vw] mt-[5vw]">
        <div className="flex justify-center items-center aspect-square h-full">
          <img src={ShirtImg} alt="Shirt Image" />
        </div>

        <form
          className="flex flex-col justify-around shadow-xl h-full w-2/5 p-5"
          onSubmit={handleSubmit}
        >
          <div className="text-4xl font-bold">{item.name}</div>
          <div className="text-lg font-bold">CHOOSE YOUR SIZE</div>
          <select
            className="h-12 border-2 font-bold focus:outline-none border-primary rounded-lg leading-tight p-2 m-2"
            value={chosenSize}
            onChange={(e) => {
              setSize(e.target.value);
              console.log(e.target.value);
            }}
          >
            {/* {item.size.map((itemSize) => (
              <option key={itemSize} value={itemSize}>
                {itemSize}
              </option>
            ))} */}
          </select>
          <div className="flex flex-col items-center">
            <button
              className="border text-white bg-primary text-lg font-black p-3 rounded-lg hover:bg-red-700 m-2"
              type="submit"
            >
              ADD TO CART ${item.price}
            </button>
          </div>
        </form>
      </div>
      <div className="p-[3vw]">
        <div className="flex flex-col justify-center items-center text-4xl font-bold">
          DESCRIPTION
          <div className="aspect-[12/1] h-[21px] bg-primary"></div>
        </div>
        <div className="text-justify text-xl mt-[2vw]">{item.description}</div>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  title: PropTypes.string,
  item: PropTypes.object,
};
