import React from 'react'
import './AddSkillButton.css';

const AddButton = ({onClick, disabled}) => {
    return (
         <div className="add-button"> 
                 <button onClick={onClick} disabled={disabled} role="add-btn"> + </button>  
         </div>       
    )
 }
 
 export default AddButton;