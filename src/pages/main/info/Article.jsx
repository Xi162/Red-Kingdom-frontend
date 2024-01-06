import TextBlock from "./textBlock";
import ImageBlock from "./imageBlock";
import SubtitleBlock from "./subtitleBlock";
export default function Article({ id }) {
  return (
    <>
      {/* Fetch article's blocks here (using article ID) */}
      {/* Afterwhich, pass article attribute (title, cover-image, datetime) to correct places */}

      <div>
        {/* Image & Title */}
        <div className="w-full h-88 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-black/20 z-20"></div>
          {/* Cover Image */}
          <img
            src="/src/assets/images/zidane-1868.png"
            alt="#"
            className="w-full h-full object-cover"
          />

          {/* Title */}
          <div className="absolute bottom-4 text-5xl text-white font-bold font-title uppercase tracking-wide z-30">
            Ten Hag: I'm a bad manager
          </div>
        </div>

        {/* Content */}
        <div className="px-28">
          <div className="">
            <a href="#" className="w-fit flex mt-4 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </a>
            {/* Publish Datetime */}
            Thursday 02 November 2023 15:00
          </div>

          <hr className="w-full border-neutral-400 border mt-8" />
          {/* Content */}

          {/* Should write a function that traverse through list of blocks, 
          then return a React component according to "BlockType" */}

          {/* Example: Subtitle block(subtitleContent) */}
          <SubtitleBlock />

          {/* Example: Text Block(textContent) */}
          <TextBlock />

          {/* Example: Image block(imageFileName, imageDescription)*/}
          <ImageBlock />
        </div>
      </div>
    </>
  );
}
