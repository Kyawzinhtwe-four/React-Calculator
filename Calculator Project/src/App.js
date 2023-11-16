import Input from "./components/Input";
import Output from "./components/Output";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);

  const handleCalculatiion = (value) => {
    switch (value) {
      case "C":
        setOutput(0);
        setInput(0);
        break;
      case "AC":
        input.length == 1
          ? setInput(0)
          : setInput(input.slice(0, input.length - 1));
        break;
      case "=":
        try {
          setOutput(eval(input));
          setInput(0);
        } catch (e) {
          setOutput(e.message);
        }
        break;
      default:
        input == 0 ? setInput(value) : setInput(input + value);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-700 flex flex-col items-center justify-center">
        <div className="w-full md:w-1/3 mx-auto">
          <Output output={output} />
          <Input input={input} />
          <Button handleCalculatiion={handleCalculatiion} />
        </div>
      </div>
    </>
  );
}
export default App;
