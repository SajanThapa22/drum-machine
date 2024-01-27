import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(
    () =>
      document.addEventListener("keydown", (event) => {
        playSound(event.key.toUpperCase());
      }),
    []
  );
  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiceKey(selector);
  }

  const [activeKey, setActiceKey] = useState("");

  const drumPads = [
    {
      keycode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keycode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keycode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keycode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keycode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keycode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keycode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keycode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keycode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"> {activeKey} </div>
        <div className="drum-pads">
          {drumPads.map((dp) => (
            <div
              onClick={() => playSound(dp.text)}
              className="drum-pad"
              id={dp.src}
              key={dp.keycode}
            >
              {dp.text}
              <audio className="clip" id={dp.text} src={dp.src}></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
