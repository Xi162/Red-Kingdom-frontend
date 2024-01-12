import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ShopMain() {
  return (
    <div className="">
      <KitSlider title="OFFICIALS" />
      <KitSlider title="TRAINING" />
      <KitSlider title="HATS" />
      <KitSlider title="BAGS" />
      <KitSlider title="SOUVENIRS" />
    </div>
  );
}

function KitSlider({ title }) {
  const [itemList, setItemList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`http://localhost:5500/products/${title}`)
      .then((res) => {
        console.log(res);
        setItemList(res.data);
      })
      .catch((err) => console.log(err));
  }, [title]);
  return (
    <div className="flex flex-col justify-center mt-[50px] mb-[50px]">
      <div className="text-lg font-black ml-[22px]">
        {title}
        <div className="h-[12px] w-1/4 bg-primary"></div>
      </div>
      <div className="h-2/3 overflow-auto">
        <div className="h-full flex justify-start gap-28 px-4 mt-[50px]">
          {itemList.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              className="w-[192.51px] shadow hover:shadow-xl transform hover:opacity-75 active:mt-[5px] active:shadow"
              to={`/shop/products/${item.id}`}
            >
              <img src={"/src/assets/images/item.png"} alt="itemImage" />
              <div className="flex flex-col justify-between items-start w-full pl-[10px] pr-[10px] absolute bottom-0 bg-black bg-opacity-20 active:mt-[5px]">
                <div className="text-[18px] font-bold text-white group-hover">
                  {item.name}
                </div>
                <div className="text-[15px] text-white">${item.price}</div>
              </div>
            </Link>
          ))}
          {itemList.slice(3, 4).map((item) => (
            <Link
              key={item.id}
              className="w-[192.51px] shadow hover:shadow-xl transform hover:opacity-75 active:mt-[5px] active:shadow"
              to={`/shop/${title.toLowerCase()}`}
            >
              <img src={"/src/assets/images/item.png"} alt="itemImage"></img>
              <div className="flex flex-col justify-between items-start w-full pl-[10px] pr-[10px] absolute bottom-0 bg-black bg-opacity-20 active:mt-[5px]">
                <div className="text-[18px] font-bold text-white group-hover">
                  {item.name}
                </div>
                <div className="text-[15px] text-white">${item.price}</div>
              </div>
              <div className="flex justify-center items-center h-full w-[192.51px] text-[20px] font-bold text-white absolute right-0 top-0 bg-black bg-opacity-40">
                SEE ALL {">>"}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

KitSlider.propTypes = {
  title: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
};
