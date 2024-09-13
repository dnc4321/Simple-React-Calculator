import React from "react";

function ButtonArray(props) {
  const buttons = [
    { label: "AC", class: "bg-gray-600 text-white " },
    { label: "C", class: "bg-gray-600 text-white " },
    { label: "%", class: "bg-orange-500 text-white text-2xl" },
    { label: "/", class: "bg-orange-500 text-white text-2xl" },
    { label: "7", class: "bg-gray-200" },
    { label: "8", class: "bg-gray-200" },
    { label: "9", class: "bg-gray-200" },
    { label: "*", class: "bg-orange-500 text-white text-2xl" },
    { label: "4", class: "bg-gray-200" },
    { label: "5", class: "bg-gray-200" },
    { label: "6", class: "bg-gray-200" },
    { label: "-", class: "bg-orange-500 text-white text-2xl" },
    { label: "1", class: "bg-gray-200" },
    { label: "2", class: "bg-gray-200" },
    { label: "3", class: "bg-gray-200" },
    { label: "+", class: "bg-orange-500 text-white row-span-2 text-2xl" },
    { label: ".", class: "bg-gray-200" },
    { label: "0", class: "bg-gray-200" },
    { label: "=", class: "bg-gray-800 text-white" },
  ];

  const handleButtonClick = (label) => {
    if (label === "AC") {
      props.setEquation("");
      props.setDisplay("");
      props.setLastActionEquals(false);
    } else if (label === "=") {
      props.calculateResult();
      props.setLastActionEquals(true);
    } else {
      if (props.lastActionEquals && ["+", "-", "*", "/"].includes(label)) {
        props.setEquation(props.display + label);
        props.setDisplay("");
      } else if (["+", "-", "*", "/"].includes(label)) {
        props.setEquation(props.equation + label);
        props.setDisplay("");
      } else {
        props.setEquation((prevEquation) => prevEquation + label);
        props.setDisplay(props.display + label);
      }
      props.setLastActionEquals(false);
    }
  };

  return (
    <div className="w-full h-3/5 mt-10">
      <div className="grid grid-cols-4 gap-3 w-5/6 h-full mx-auto bg-transparent rounded-lg">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`p-4 text-xl font-bold rounded-lg ${button.class} hover:opacity-80 transition-opacity border`}
            onClick={() => handleButtonClick(button.label)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonArray;
