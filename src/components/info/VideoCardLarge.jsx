import { Link } from "react-router-dom";

export default function VideoCardLarge({
  image,
  title,
  id,
  timeSince = "7h",
  contentType = "match review",
}) {
  return (
    <div className="md:flex items-center justify-center w-full md:w-1/2 h-60 md:h-90">
      <Link
        className="rounded-lg overflow-hidden shadow-md hover:shadow-xl flex h-full m-4 relative w-full"
        // to={`/article/${id}`}
        to={`/video/${id}`}
      >
        <div className="w-full transition-transform duration-300 transform hover:scale-105">
          <img src={image} alt="" className="w-full h-full object-cover " />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="absolute bottom-0 bg-black/50 w-full h-28">
          <img
            src="src/assets/images/youtube.png"
            alt="youtube-icon"
            className="absolute -top-4 left-4"
            height={48}
            width={48}
          />
          <div className="text-white text-3xl font-bold uppercase font-title absolute top-5 left-4">
            {title}
          </div>
          <div className="absolute bottom-2 left-4 text-base font-medium text-white">
            {timeSince} | {contentType}
          </div>
          <div href="#" className="fill-white w-full h-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
