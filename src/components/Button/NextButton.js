import React from 'react'
import './NextButton.css';
import { Link } from 'react-router-dom';


const NextButton = ({onClick, disabled}) => {
   return (
    <Link to="/search">
        <div className="next-button"> 
                <button onClick={onClick} disabled={disabled}>NEXT</button>  
        </div>       
     </Link>    
   )
}

export default NextButton;