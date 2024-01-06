export default function ImageBlock({
  imageFileName = "zidane-1868.png",
  imageDescription = "Our worst manager in the last decade",
}) {
  return (
    <>
      <div className="mt-8 mb-2 flex justify-center">
        <div className="relative w-fit">
          <div className="absolute inset-0 bg-black/20 z-20"></div>
          <img
            src={`/src/assets/images/${imageFileName}`}
            alt="#"
            className="h-84 w-auto"
          />
        </div>
      </div>
      {/* Image description? */}
      <div className="italic flex justify-center">
        Image: {imageDescription}
      </div>
    </>
  );
}
