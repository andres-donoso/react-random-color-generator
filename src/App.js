import './App.css';
// import chalk from 'chalk';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

const App = () => {
  const [hex, setHex] = useState('#ffffff');
  // const [luminosity, setLuminosity] = useState('');
  // const [hue, setHue] = useState('');

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

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: hex,
          minHeight: '33.34vh',
          overflow: 'hidden',
          zoom: 3,
        }}
      >
        <h1>Random Color Generator</h1>
        <button onClick={() => setHex(randomColor())}>Generate</button>
        Generated Color: {hex}
      </div>
    </div>
  );
};

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
  */ /* <input type="text" value={hue} onChange={() => setLuminosity()} /> */

// </label>; */}
// </form>
// <form>
// <label>
/* <input type="text" value={luminosity} onChange={() => setHue()} /> */
//   {''}
// </label>
// </form>
export default App;
