import './App.css';
// import styled from '@emotion/styled'; // CSS-in-JS API
import { useState } from 'react';

export default Body;

// Library import to randomize colors
const color = require('randomcolor');

function Body() {
  const [randomColor, setRandomColor] = useState('grey');
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('random');

  return (
    <body className="App-body" style={{ backgroundColor: randomColor }}>
      <button
        className="randomizeColorButton"
        onClick={() => {
          setRandomColor(
            color({
              luminosity: luminosity,
              hue: hue,
            }),
          );
        }}
      >
        Go Bananas{' '}
        <span role="img" aria-label="banana">
          🍌
        </span>
      </button>

      <div>
        Care for some hue?
        <p />
        <select
          className="hueList"
          value={hue}
          onChange={(event) => setHue(event.target.value)}
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
      </div>

      <div>
        Pick your luminosity!
        <p />
        <select
          className="luminosityList"
          value={luminosity}
          onChange={(event) => setLuminosity(event.target.value)}
        >
          <option value="random">surprise me!</option>
          <option value="dark">dark</option>
          <option value="bright">bright</option>
          <option value="light">light</option>
        </select>
      </div>

      <div>
        <b>
          Randomly generated banana factor <p />
          {randomColor}
        </b>
        <p />
        #bananarama!!!
      </div>
    </body>
  );
}
