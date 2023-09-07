import React, { useState } from 'react'
// import "./src/index.css"

const DarkMode = () => {
  const [style, setStyle] = useState("homeSlide");

  const changeStyle = () => {
    setStyle("homeSlide-dark");
  };

  return (
    <div>
      <button className="button" onClick={changeStyle}>
        Click me!
      </button>
    </div>
  )
}

export default DarkMode
