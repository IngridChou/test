import "./styles.css";
import Boxes from "./components/Boxes";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  function handleMouseOver(event) {
    const element = event.target; //target means <button></button>
    element.textContent = "You are hovering above me";
  }

  function handleMouseOut(event) {
    const element = event.target; // target means the <button></button>
    element.textContent = "Click Me!";
  }

  return (
    <div className="App">
      <Boxes />
      <p>this is a test project</p>
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Click me
      </button>
    </div>
  );
}
