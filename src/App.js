import { useState } from "react";
import { CirclePicker } from "react-color";

function App() {
  const [color, setColor] = useState("#fff");
  const style = { backgroundColor: color };
  return (
    <main style={style}>
      <CirclePicker
        color={color}
        onChangeComplete={(color) => setColor(color.hex)}
      />
    </main>
  );
}

export default App;
