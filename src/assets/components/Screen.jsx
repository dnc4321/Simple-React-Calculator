import React from 'react'

function Screen(props) {
  return (
    <>
      <input
            type="text"
            className="w-5/6 h-7 border  rounded-t-xl mt-10 px-4"
            placeholder="f(x)"
            value={props.equation}
            onChange={(e) => props.setEquation(e.target.value)}
          />
          <input
            type="text"
            className="w-5/6 h-1/6 border  rounded-b-xl px-4 font-bold text-7xl text-right"
            placeholder="0"
            value={props.display}
          />
    </>
  )
}

export default Screen
