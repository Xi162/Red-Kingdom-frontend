import NewsCardLarge from "../../../components/info/NewsCardLarge.jsx";
import NewsCardSmall from "../../../components/info/NewsCardSmall.jsx";
import VideoCardLarge from "../../../components/info/VideoCardLarge.jsx";
import ProductCarousel from "../../../components/info/ProductCarousel.jsx";
import Footer from "../../../components/info/Footer.jsx";
import GenericContainer from "../../../components/info/GenericContainer.jsx";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [relateds, setRelated] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/src/mock_data/news.json").then((response) => response.json()),
      fetch("/src/mock_data/related.json").then((response) => response.json()),
    ])
      .then(([dataNews, dataRelated]) => {
        setArticles(dataNews);
        setRelated(dataRelated);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  const componentByType = (item, smallFlag) => {
    if (item.type == "article") {
      if (smallFlag) {
        return (
          <NewsCardSmall
            key={item.id}
            image={`src/assets/images/${item.img}`}
            title={item.title}
            description={item.description}
          />
        );
      }
      return (
        <NewsCardLarge
          key={item.id}
          image={`src/assets/images/${item.img}`}
          title={item.title}
          description={item.description}
        />
      );
    } else if (item.type == "video") {
      // LACK VIDEO CARD SMALL

      return (
        <VideoCardLarge
          key={item.id}
          image={`src/assets/images/${item.img}`}
          title={item.title}
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

      {/* <GenericContainer
        classes={"md:flex flex-wrap m-12 my-8"}
        titleText={"Fan's stories"}
        viewMoreText={"Visit our fan's homepage"}
        childComponents={[
          () => (
            <NewsCardLarge
              image="src/assets/images/zidane-1868.png"
              title="the dawg"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Laboriosam esse, vero eligendi culpa tenetur quisquam. Vitae nesciunt cumque ex optio?"
            />
          ),
          () => (
            <VideoCardLarge
              image="src/assets/images/zidane-1868.png"
              title="the dawg"
            />
          ),
        ]}
      /> */}

      <Footer />
    </>
  );
}
