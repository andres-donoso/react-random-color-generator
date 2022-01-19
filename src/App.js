import './App.css';
// import chalk from 'chalk';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState('#ffffff');

  return (
    <div className="App">
      <h1 class="myHeading">Random Color Generator</h1>
      <button onClick={() => setHex(randomColor())}>Generate</button>
      <div
        class="myDiv"
        style={{
          backgroundColor: hex,
          height: '400px',
          margin: '100px',
          padding: '50px',
          transition: 'all 0.5s',
        }}
      >
        Generated Color: {hex}
      </div>
    </div>
  );
}
// const [luminosity, setLuminosity] = useState('');
// const [hue, setHue] = useState('');
// const App = () => {
// const randomizedHex = () => {
//   const color = randomColor();
// luminosity: process.argv[2],
// hue: process.argv[3],

// const color = getRandomColor(), {
//   color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
//   return color;
// setHex(color);
// setLuminosity(process.argv[2]);
// setHue(process.argv[3]);
// };

// });
// const luminosity =
// const hue =

// '#' + Math.floor(Math.random() * 16777215).toString(16);

/* <input type="text" value={hue} onChange={() => setLuminosity()} /> */

// STYLED COMPONENTS
// const button = styled.button`
//   color: white;
//   padding: 5px 15px;
//   border-radius: 5px;
//   outline: 0;
//   /* text-transform: uppercase; */
//   margin: 10px 0px;
//   cursor: pointer;
/* <label>
  {' '}
  */

// </label>; */}
// </form>
// <form>
// <label>
/* <input type="text" value={luminosity} onChange={() => setHue()} /> */
//   {''}
// </label>
// </form>
