import { Link } from "react-router-dom";

export default function NewsCardLarge({
  image,
  title,
  description,
  id,
  timeSince = "5h",
  contentType = "match coverage",
}) {
  return (
    <div className="md:flex items-center justify-center w-full md:w-1/2 h-60 md:h-90">
      <Link
        className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden flex h-full m-4"
        to={`/article/${id}`}
      >
        {/* Article Image */}
        <div className="w-1/2 relative transition-transform duration-300 transform hover:scale-105">
          <div className="absolute inset-0 bg-black/20"></div>
          <img
            src={image}
            alt={"#"}
            className="w-full h-full object-cover object-center md:object-left lg:object-center"
          />
        </div>
        {/* Article Content */}
        <div className="w-1/2 p-4 relative">
          <hr className="w-20 border-primary border" />
          <h2 className="text-3xl font-semibold font-title uppercase my-2">
            {title}
          </h2>
          <p className="text-md">{description}</p>
          <div className="absolute bottom-2 text-base font-medium">
            {timeSince} | {contentType}
          </div>

          {/* Share button */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
