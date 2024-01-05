import React from "react"
import './NextButton.css';


const nextButton = ({onClick, disabled}) => {
   return (
        <div className="next-button">
            <button onClick={onClick} disabled={disabled}>NEXT</button>
        </div>
   )
}

export default nextButton;