import Input from "./input";
import { useState } from "react";
import Square from "./square";

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [changeTextColor, setChangeTextColor] = useState(true);

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        changeTextColor={changeTextColor}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        changeTextColor={changeTextColor}
        setChangeTextColor={setChangeTextColor}
      />
    </div>
  );
}

export default App;