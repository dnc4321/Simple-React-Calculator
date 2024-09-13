import { useState } from "react";
import * as math from "mathjs";
import ButtonArray from "./components/ButtonArray";
import Screen from "./assets/components/Screen";

function App() {
  const [equation, setEquation] = useState("");
  const [display, setDisplay] = useState("");
  const [lastActionEquals, setLastActionEquals] = useState(false);

  const calculateResult = () => {
    try {
      const result = math.evaluate(equation);
      setDisplay(result.toString());
      setLastActionEquals(true);
    } catch (error) {
      setDisplay("Error");
      setEquation("");
    }
  };

  return (
    <>
      <div className="w-screen border h-screen flex justify-center items-center bg-slate-300 ">
        <div className="w-md max-w-md min-w-[350px] h-4/5 bg-slate-500 flex flex-col items-center rounded-3xl border">
          <Screen
            equation={equation}
            display={display}
            setEquation={setEquation}
          />
          <ButtonArray
            calculateResult={calculateResult}
            equation={equation}
            setEquation={setEquation}
            display={display}
            setDisplay={setDisplay}
            lastActionEquals={lastActionEquals}
            setLastActionEquals={setLastActionEquals}
          />
        </div>
      </div>
    </>
  );
}

export default App;
