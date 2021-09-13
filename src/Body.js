import './App.css';
import styled from '@emotion/styled'; // CSS-in-JS API
import { refState, useState } from 'react';

export default Body;

// Library import to randomize colors
let colorizer = require('randomcolor');

function Body() {
  const [randomColor, setRandomColor] = useState('#ff0000');
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('random');

  return (
    <body className="App-body" style={{ backgroundColor: randomColor }}>
      <button
        className="randomizeColorButton"
        onClick={() => {
          setRandomColor(
            colorizer({
              luminosity: luminosity,
              hue: hue,
            }),
          );
        }}
      >
        Go Bananas!
      </button>

      <select
        className="hueList"
        value={hue}
        onChange={(e) => setHue(e.target.value)}
      >
        <option value="random">surprise me!</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
        <option value="orange">orange</option>
        <option value="purple">purple</option>
        <option value="pink">pink</option>
      </select>

      <select
        className="luminosityList"
        value={luminosity}
        onChange={(e) => setLuminosity(e.target.value)}
      >
        <option value="random">surprise me!</option>
        <option value="dark">dark</option>
        <option value="bright">bright</option>
        <option value="light">light</option>
      </select>

      <div>
        <b>Randomly generated banana factor</b> <br />
        <br /> {randomColor} #bananarama
      </div>
    </body>
  );
}
