import NewsCardLarge from "../../../components/info/NewsCardLarge.jsx";
import NewsCardSmall from "../../../components/info/NewsCardSmall.jsx";
import VideoCardLarge from "../../../components/info/VideoCardLarge.jsx";
import ProductCarousel from "../../../components/info/ProductCarousel.jsx";
import Footer from "../../../components/info/Footer.jsx";
import GenericContainer from "../../../components/info/GenericContainer.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [relateds, setRelated] = useState([]);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/articles`)
      .then((res) => {
        const fetchData = res.data.map((item, index) => {
          // Assuming itemList has at least 6 items
          if (index === 1) {
            // Set the type to "video" for the second item
            return { ...item, type: "video" };
          }
          return { ...item, type: "article" };
        });
        console.log(res.data);

        setItemList(fetchData);
        setArticles(fetchData.slice(0, 2));
        setRelated(fetchData.slice(2, 6));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const componentByType = (item, smallFlag) => {
    if (item.type == "article") {
      if (smallFlag) {
        return (
          <NewsCardSmall
            key={item.id}
            image={`src/assets/images/${item.image}`}
            title={item.title}
            description={item.description}
            id={item.id}
          />
        );
      }
      return (
        <NewsCardLarge
          key={item.id}
          image={`src/assets/images/${item.image}`}
          title={item.title}
          description={item.description}
          id={item.id}
        />
      );
    } else if (item.type == "video") {
      // LACK VIDEO CARD SMALL

      return (
        <VideoCardLarge
          key={item.id}
          image={`src/assets/images/${item.image}`}
          title={item.title}
          id={item.id}
        />
      );
    }
    return null;
  };

  return (
    <>
      {/* Contents */}
      <GenericContainer
        classes={"md:flex flex-wrap m-12 my-8"}
        titleText={"today on manutd.com"}
        viewMoreText={"view more story"}
        childComponents={articles.map((article) => componentByType(article))}
      />

      <GenericContainer
        classes={"md:flex md:flex-wrap m-12 mt-4 mb-4"}
        titleText={"In case you missed"}
        viewMoreText={"find more feature"}
        childComponents={relateds.map((related) =>
          componentByType(related, true)
        )}
      />

      {/* Shop carousel */}
      <div>
        <ProductCarousel image={"src/assets/images/carousel-bg.jpg"} />
      </div>
      <Footer />
    </>
  );
}
