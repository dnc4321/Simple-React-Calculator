import React from 'react'

function ButtonArray({ onButtonClick }) {
  const buttons = [
    { label: 'AC', class: 'col-span-2 bg-gray-300' },
    { label: '%', class: 'bg-gray-300' },
    { label: '/', class: 'bg-orange-500 text-white' },
    { label: '7', class: 'bg-gray-200' },
    { label: '8', class: 'bg-gray-200' },
    { label: '9', class: 'bg-gray-200' },
    { label: '*', class: 'bg-orange-500 text-white' },
    { label: '4', class: 'bg-gray-200' },
    { label: '5', class: 'bg-gray-200' },
    { label: '6', class: 'bg-gray-200' },
    { label: '-', class: 'bg-orange-500 text-white' },
    { label: '1', class: 'bg-gray-200' },
    { label: '2', class: 'bg-gray-200' },
    { label: '3', class: 'bg-gray-200' },
    { label: '+', class: 'bg-orange-500 text-white' },
    { label: '0', class: 'col-span-2 bg-gray-200' },
    { label: '.', class: 'bg-gray-200' },
    { label: '=', class: 'bg-orange-500 text-white' },
  ]
 
  return (
    <div className="grid grid-cols-4 gap-1 max-w-xs mx-auto bg-gray-800 p-4 rounded-lg">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`p-4 text-xl font-bold rounded-full ${button.class} hover:opacity-80 transition-opacity`}
          onClick={() => onButtonClick(button.label)}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default ButtonArray
