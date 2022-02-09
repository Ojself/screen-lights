import { useEffect, useState } from "react";
import { CirclePicker } from "react-color";

function App() {
  const [color, setColor] = useState("#fff");
  useEffect(() => {
    const savedColor = localStorage.getItem("hex");
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  const handleColorChange = (color) => {
    const { hex } = color;
    setColor(hex);
    localStorage.setItem("hex", hex);
  };

  const style = { backgroundColor: color };
  return (
    <main style={style}>
      <CirclePicker color={color} onChangeComplete={handleColorChange} />
    </main>
  );
}

export default App;
