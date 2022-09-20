import React, { useState } from "react";
import "./App.css";
import ConvertTo from "./components/ConvertTo";
import Exchange from "./assets/images/exchange.png"
import ConvertFrom from "./components/ConvertFrom";

import UpDown from "./assets/images/up_down_arrow.png"

const App: React.FC = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [exchRate1, setExchRate1] = useState(0);
  const [exchRate2, setExchRate2] = useState(0);
  return (
    <div className="main" onClick={() => {
      setShow1(() => false);
      setShow2(() => false);
    }}>
      <h1>Currency Converter</h1>
      <img className="convert-img" width={150} src={Exchange} alt="ex" />
      <ConvertFrom
        setExchRate1={setExchRate1}
        exchRate1={exchRate1}
        exchRate2={exchRate2}
        setValue1={setValue1}
        setValue2={setValue2}
        value1={value1}
        show1={show1}
        setShow1={setShow1}
        setShow2={setShow2}
      />

      <img className="up-down-arrow" src={UpDown} alt="up down arrow" />

      <ConvertTo
        setExchRate2={setExchRate2}
        exchRate1={exchRate1}
        exchRate2={exchRate2}
        setValue1={setValue1}
        setValue2={setValue2}
        value2={value2}
        show2={show2}
        setShow1={setShow1}
        setShow2={setShow2}
      />
    </div>
  );
};

export default App;
