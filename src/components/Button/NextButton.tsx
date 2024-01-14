import React from 'react'
import './NextButton.css';
import { Link } from 'react-router-dom';


const NextButton = ({route, onClick, disabled}) => {
   return (
    <Link to={route}> 
        <div className="next-button"> 
                <button onClick={onClick} disabled={disabled}>NEXT</button>  
        </div>       
     </Link>    
   )
}

export default NextButton;