export default function SubtitleBlock({
  subtitleContent = "He defends himself",
}) {
  return (
    <h4 className="pt-4 text-xl font-bold">
      <div>{subtitleContent}</div>
    </h4>
  );
}
