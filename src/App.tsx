import React, { useState } from "react";
import "./App.css";
import ConvertTo from "./components/ConvertTo";
import ConvertFrom from "./components/ConvertFrom";

const App: React.FC = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div className="main" onClick={() => {
      setShow1(() => false);
      setShow2(() => false);
    }}>
      <ConvertFrom
        show1={show1}
        setShow1={setShow1}
        setShow2={setShow2}
      />
      <ConvertTo
        show2={show2}
        setShow1={setShow1}
        setShow2={setShow2}
      />
    </div>
  );
};

export default App;
