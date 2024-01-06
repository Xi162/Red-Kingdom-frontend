export default function CarouselButton({ icon = ">" }) {
  let buttonClassName =
    "flex items-center justify-center align-middle rounded-md p-2 h-full text-white text-3xl font-semibold carouselBtn";

  if (icon === ">") {
    buttonClassName += " absolute right-0";
  } else if (icon === "<") {
    buttonClassName += " mr-4";
  } else {
    throw new Error("Invalid icon value. Please provide '>' or '<'.");
  }

  return (
    <button className={buttonClassName}>
      <span className="text-white">{icon}</span>
    </button>
  );
}
