import React, { useState } from 'react'

const ButtonComponent = (props) => {
    const [colour, setColour] = useState(props.colour);
    const [textColour, setTextColour] = useState(props.textColour);
    const switchColours = () => {
        console.log('switch');
        const temp = colour;
        setColour(textColour);
        setTextColour(temp);
    }
  return (
    <button onClick={switchColours} style={{backgroundColor: colour, color: textColour}}>ButtonComponent</button>
  )
}

export default ButtonComponent