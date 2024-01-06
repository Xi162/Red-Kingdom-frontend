import Navbar from "../../../components/info/header";
export default function Article({ id }) {
  return (
    <>
      <Navbar />
      <div>
        {/* Image & Title */}
        <div className="w-full h-88 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-black/20 z-20"></div>
          <img
            src="/src/assets/zidane-1868.png"
            alt="#"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 text-5xl text-white font-bold font-title uppercase tracking-wide z-30">
            Ten Hag: I'm a bad manager
          </div>
        </div>

        {/* Content */}
        <div className="px-28 py-8">
          <div className="">Thursday 02 November 2023 15:00</div>
          <a href="#">
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
          <hr className="w-full border-neutral-400 border" />
          <p className="pt-12 text-lg">
            Erik ten Hag declared himself a 'fighter' in the aftermath of our
            Carabao Cup exit to Newcastle United. The Dutchman led the Reds to a
            Carabao Cup crown last season, but saw our defence of the trophy
            come to an end at Old Trafford with a 3-0 reverse to Eddie Howe's
            side. <br /> <br />
            Having suffered five defeats from our opening 10 matches of the
            season on home soil, Ten Hag was asked whether he has any doubts
            over his own confidence in turning the Reds' fortunes around.
          </p>

          <div className="mt-8 mb-2 flex justify-center">
            <div className="relative w-fit">
              <div className="absolute inset-0 bg-black/20 z-20"></div>
              <img
                src="/src/assets/zidane-1868.png"
                alt="#"
                className="h-84 w-auto"
              />
            </div>
          </div>
          <div className="italic flex justify-center">
            Image: Our worst manager in the last decade
          </div>
        </div>
      </div>
    </>
  );
}
