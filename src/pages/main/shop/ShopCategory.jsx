import React from "react";
import bgImg from "/src/assets/images//background_title.png";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
// import Breadcrumb from "./Breadcrumb";

export default function ShopCategory() {
  const { category } = useParams();
  const [itemList, setItemList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`http://localhost:5500/products/${category}`)
      .then((res) => {
        console.log(res);
        setItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  // const historyNav = ["Main", title];
  return (
    <div className="overflow-hidden">
      <div className="w-full relative">
        <img src={bgImg} className="h-full w-full" alt="Shop Background" />
        <div className="flex flex-col items-end absolute bottom-0 /left-[22px] pl-[22px] text-[5vw] text-white font-black z-10 /drop-shadow-2xl bg-black bg-opacity-70">
          {category.toUpperCase()}
          {/* HOME KIT */}
          <div className="aspect-[25/1] w-[28vw] bg-primary"></div>
        </div>
      </div>
      {/* <Breadcrumb history={historyNav} /> */}
      {/* <div className="flex /justify-center /w-[100vw] /ml-[2vw] /mr-[2vw]"> */}
      <div className="flex justify-center  w-fit relative">
        <div className="flex flex-wrap w-[96vw]">
          {itemList.map((item) => (
            <div className="wrapper z-0" key={item.id}>
              <div className="content">
                <Link
                  className="flex /aspect-[4/5] /h-[17.5vw] w-[14vw] mt-[5vw] mb-[5vw] ml-[5vw] mr-[5vw] shadow hover:shadow-xl transform hover:scale-110 active:mt-[6vw] active:mb-[5vw] active:shadow"
                  to={`/shop/products/${item.id}`}
                >
                  <img src={"/src/assets/images/item.png"} alt="itemImage" />
                  <div className="flex flex-col justify-between items-start h-[22%] w-full pl-[10px] pr-[10px] absolute bottom-0 bg-black bg-opacity-20 active:mt-[5px]">
                    <div className="text-[1.4vw] font-bold text-white group-hover">
                      {item.name}
                    </div>
                    <div className="text-[1.1vw] text-white">${item.price}</div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

ShopCategory.propTypes = {
  title: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
};
