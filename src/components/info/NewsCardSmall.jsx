import { Link } from "react-router-dom";

export default function NewsCardSmall({
  image,
  position,
  title,
  description,
  id,
  timeSince = "5h",
  contentType = "match coverage",
}) {
  return (
    <div className="md:flex items-center justify-center md:w-1/2 lg:w-1/4 h-64 md:h-84 pb-4">
      <Link
        className="bg-white shadow-md hover:shadow-xl rounded-lg h-full w-full m-4 overflow-hidden"
        to={`/article/${id}`}
      >
        {/* Article Image */}
        <div className="h-1/2 relative transition-transform duration-300 transform hover:scale-105">
          <div className="absolute inset-0 bg-black/20"></div>
          <img
            src={image}
            alt={"#"}
            className={`w-full h-full object-cover ${position}`}
          />
        </div>

        {/* Article Content */}
        <div className="h-1/2 p-4 relative z-30">
          <hr className="w-20 border-primary border" />
          <h2 className="text-xl font-medium font-title my-2">{title}</h2>
          <p className="text-sm font-medium">{description}</p>
          <div className="absolute bottom-2 text-sm font-medium">
            {timeSince} | {contentType}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="absolute bottom-3 end-4"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
