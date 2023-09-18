import "./boxes.css";

function Boxes() {
  function handleInnerClick(event) {
    alert("You clicked the inner box");
    const element = event.target;
    element.style.backgroundColor = "cyan";
  }

  function handleOuterClick(event) {
    const element = event.curentTarget;
    setTimeout(function () {
      element.style.backgroundColor = "red";
    }, 2000);
  }

  return (
    <div className="outer" onClick={handleOuterClick}>
      <div className="inner" onClick={handleInnerClick}></div>
    </div>
  );
}

export default Boxes;
