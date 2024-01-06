export default function GenericContainer({
  classes,
  titleText,
  viewMoreText,
  childComponents,
}) {
  return (
    <div className={classes + " relative"}>
      <div className="w-full mb-12">
        <div className="uppercase font-black font-title text-2xl absolute left-4">
          <hr className="w-20 border-primary border-2 mb-1" />
          {titleText}
        </div>
        <div className="uppercase font-black font-title absolute right-4 top-6">
          {viewMoreText}
        </div>
      </div>

      {/* {childComponents.map((ChildComponent, index) => (
        <ChildComponent key={index} />
      ))} */}
      {childComponents}
    </div>
  );
}
