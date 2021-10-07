import './App.css';
import color from 'randomcolor';
import { useState } from 'react';

// Library import to randomize colors
// const color = require('randomcolor');

// Setting component Body that will use the library to set a random color as background color
function Body() {
  const [randomColor, setRandomColor] = useState('grey');
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('random');

  // Referring to App.css - onClick will call the useState 'setRandomColor' with random luminosity and hue
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
        I wanna go Bananas!{' '}
        <span role="img" aria-label="banana">
          🍌
        </span>
      </button>

      <div>
        <b>Care for some hue?</b>
        <p>
          <select
            className="hueDropdown"
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
        </p>
      </div>

      <div>
        <b>Pick your luminosity!</b>
        <p>
          <select
            className="luminosityDropdown"
            value={luminosity}
            onChange={(event) => setLuminosity(event.target.value)}
          >
            <option value="random">surprise me!</option>
            <option value="dark">dark</option>
            <option value="bright">bright</option>
            <option value="light">light</option>
          </select>
        </p>
      </div>

      <div>
        <b>
          Randomly generated banana factor <p />
          {randomColor}
        </b>
        <p>#bananarama!!!</p>
      </div>
    </body>
  );
}

export default Body;
