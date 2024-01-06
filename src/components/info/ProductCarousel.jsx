import { useState, useEffect } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import CarouselButton from "./CarouselButton.jsx";

export default function ProductCarousel({ image }) {
  const getInitialCarouselConfig = () => {
    if (window.innerWidth < 768) {
      return { show: 1.5, slide: 1 };
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      return { show: 2.5, slide: 2 };
    } else {
      return { show: 3.5, slide: 3 };
    }
  };

  const [carouselConfig, setCarouselConfig] = useState(
    getInitialCarouselConfig()
  );
  useEffect(() => {
    const handleResize = () => {
      // Set different configurations based on screen size
      if (window.innerWidth < 768) {
        setCarouselConfig({ show: 1.5, slide: 1 });
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setCarouselConfig({ show: 2.5, slide: 2 });
      } else {
        setCarouselConfig({ show: 3.5, slide: 3 });
      }
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    // handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/src/mock_data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src={image}
          alt={"#"}
          className="h-84 md:h-90 w-full object-cover object-center md:object-left lg:object-center"
        />
        <Carousel
          show={carouselConfig.show}
          slide={carouselConfig.slide}
          swiping={true}
          leftArrow={<CarouselButton icon="<" />}
          rightArrow={<CarouselButton icon=">" />}
          responsive={true}
          className="absolute inset-0"
        >
          <div className="flex flex-col justify-center items-center bg-white mr-20 mt-12 md:mt-20 lg:mt-16 rounded-2xl">
            <img
              src="../src/assets/images/product-kit.png"
              alt="product image"
              className="w-40 md:w-48 lg:w-60"
            />
            <p className="flex justify-center italic font-light">
              Product Name 1
            </p>
            <button className="flex justify-center bg-primary mt-2 mb-2 p-2 rounded-lg uppercase text-white font-title">
              Buy Now
            </button>
          </div>
          <div className="flex flex-col justify-center items-center bg-white mr-20 mt-12 md:mt-20 lg:mt-16 rounded-2xl">
            <img
              src="../src/assets/images/product-kit.png"
              alt="product image"
              className="w-40 md:w-48 lg:w-60"
            />
            <p className="flex justify-center italic font-light">
              Product Name 2
            </p>
            <button className="flex justify-center bg-primary mt-2 mb-2 p-2 rounded-lg uppercase text-white font-title">
              Buy Now
            </button>
          </div>
          <div className="flex flex-col justify-center items-center bg-white mr-20 mt-12 md:mt-20 lg:mt-16 rounded-2xl">
            <img
              src="../src/assets/images/product-kit.png"
              alt="product image"
              className="w-40 md:w-48 lg:w-60"
            />
            <p className="flex justify-center italic font-light">
              Product Name 3
            </p>
            <button className="flex justify-center bg-primary mt-2 mb-2 p-2 rounded-lg uppercase text-white font-title">
              Buy Now
            </button>
          </div>
          <div className="flex flex-col justify-center items-center bg-white mr-20 mt-12 md:mt-20 lg:mt-16 rounded-2xl">
            <img
              src="../src/assets/images/product-kit.png"
              alt="product image"
              className="w-40 md:w-48 lg:w-60"
            />
            <p className="flex justify-center italic font-light">
              Product Name 4
            </p>
            <button className="flex justify-center bg-primary mt-2 mb-2 p-2 rounded-lg uppercase text-white font-title">
              Buy Now
            </button>
          </div>
          <div className="flex flex-col justify-center items-center bg-white mr-20 mt-12 md:mt-20 lg:mt-16 rounded-2xl">
            <img
              src="../src/assets/images/product-kit.png"
              alt="product image"
              className="w-40 md:w-48 lg:w-60"
            />
            <p className="flex justify-center italic font-light">
              Product Name 5
            </p>
            <button className="flex justify-center bg-primary mt-2 mb-2 p-2 rounded-lg uppercase text-white font-title">
              Buy Now
            </button>
          </div>
          <div className="flex flex-col justify-center items-center bg-white mr-20 mt-12 md:mt-20 lg:mt-16 rounded-2xl">
            <img
              src="../src/assets/images/product-kit.png"
              alt="product image"
              className="w-40 md:w-48 lg:w-60"
            />
            <p className="flex justify-center italic font-light">
              Product Name 6
            </p>
            <button className="flex justify-center bg-primary mt-2 mb-2 p-2 rounded-lg uppercase text-white font-title">
              Buy Now
            </button>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
