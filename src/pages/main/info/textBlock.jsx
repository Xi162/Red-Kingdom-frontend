export default function TextBlock({ textContent }) {
  if (!textContent) {
    textContent =
      "Erik ten Hag declared himself a 'fighter' in the aftermath of our Carabao Cup exit to Newcastle United." +
      "The Dutchman led the Reds to a Carabao Cup crown last season, but saw our defence of the trophy come to" +
      "an end at Old Trafford with a 3-0 reverse to Eddie Howe's side. <br /> <br /> Having suffered five defeats" +
      "from our opening 10 matches of the season on home soil, Ten Hag was asked whether he has any doubts over his" +
      "own confidence in turning the Reds' fortunes around.";
  }
  return <p className="pt-2 text-lg">{textContent}</p>;
}
