import "./boxes.css";

function Boxes() {
  function handleInnerClick(event) {
    alert("You clicked the inner box");
    const element = event.target;
    element.style.backgroundColor = "cyan";
  }
  return (
    <div className="outer">
      <div className="inner" onClick={handleInnerClick}></div>
    </div>
  );
}

export default Boxes;
