import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div
      className="w-[100%] h-[100vh] duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("Olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("Gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("Lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("White")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "White" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default App;
