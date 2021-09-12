import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("translation will appear here...");

  const list = useMemo(
    () => ({
      "😊": "Smiling",
      "😳": "disbelief",
      "😔": "sad",
      "🥡": "takeout box",
      "❤️": "love",
      "😑": "annoyance",
      "😀": "Grinning Face",
      "💫": "Dizzy",
      "🦍": "Gorilla",
      "🐕": " Dog",
      "🐱": "Cat Face",
      "🐦": "Bird",
      "🐬": "Dolphin",
      "🍏": "Green Apple",
      "🌶️": "Hot Pepper",
      "🥞": "Pancakes",
      "🍔 ": "Hamburger",
      "🇮🇳": "Flag: India",
      "🇰🇮" :"Flag: Kiribati"
    }),
    []
  );

  useEffect(() => {
    if (input !== "") {
      let res = Object.keys(list).find((key) => key === input);
      if (res !== undefined) {
        setResult(res);
      } else {
        setResult("failure to recognise this emoji");
      }
    } else {
      setResult("translation will appear here...");
    }
  }, [input, list]);

  return (
    <div className="App">
      <h1>Inside Outttt</h1>
      <form className="form">
        <input onChange={(e) => setInput(e.target.value)} />
      </form>
      <div className="result">
        <div
          style={{
            fontSize: "30px",
          }}
        >
          {result}
        </div>
        <div>{list[result]}</div>
      </div>
      <div className="list">
        {Object.keys(list).map((key, i) => {
          return (
            <div key={i}>
              <button
                style={{
                  fontSize: "50px",
                  marginRight: "20px",
                  cursor: "pointer",
                  border: "1px solid white",
                  background: "white",
                }}
                onClick={() => setResult(list[key])}
              >
                {key}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
