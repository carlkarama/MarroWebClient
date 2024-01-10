import React, { useEffect, useState } from 'react';
import './Checkbox.css';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import Checkbox from '@mui/material/Checkbox';
import NextButton from '../Button/NextButton';
import { Route } from "react-router-dom";

export const HomeCheckbox = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [checkboxState, setCheckboxState] = useState({
        faster: false,
        cheaper: false,
        lookGood: false,
      });
    
    const handleCheckboxChange = (checkboxName) => {
        setCheckboxState((prevState) => ({
            ...prevState,
            [checkboxName]: !prevState[checkboxName],
        }));
    };

    const checkboxesCheckedCount = Object.values(checkboxState).filter((checked) => checked).length;
    const atLeastTwoChecked = checkboxesCheckedCount >= 2;

    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

    // Callback for handling "NEXT" button click
    const handleNextButtonClick = () => {
        // Implement your logic for what should happen when the "NEXT" button is clicked
        console.log('NEXT button clicked!');
    };

    useEffect(() => {
        setIsNextButtonEnabled(atLeastTwoChecked);
    }, [atLeastTwoChecked]);

    return (
            <div>
                <div className="homepage-instructions">
                    {
                        atLeastTwoChecked ? (
                            <p className="after-checked">At least 2 checkboxes are checked. You can click next ✅</p>
                            
                        ) : (
                            <p className="before-checked">Please check at least 2 checkboxes to activate next button.</p>
                        )
                    }
                </div>
                   
                <div className="checkbox-group">
                    
                    <div className="tile">
                        <div className="label">
                            <OfflineBoltRoundedIcon fontSize="large"></OfflineBoltRoundedIcon>
                        </div>
                        
                        <div className="checkbox-items">
                        <div className="faster-label">Faster</div>
                        <div className="checkbox-selection">
                            <Checkbox {...label}  
                            checked={checkboxState.faster}
                            onChange={() => handleCheckboxChange('faster')}
                            disabled={atLeastTwoChecked && !checkboxState.faster}
                            />
                        </div> 
                        </div>
                    </div>

                    <div className="tile">
                        <div className="label">
                            <AttachMoneyRoundedIcon fontSize="large"></AttachMoneyRoundedIcon>
                        </div>
                        <div className="checkbox-items">
                            <div className="cheaper-label">Cheaper</div>
                            <div className="checkbox"></div>
                            <div className="checkbox-selection">
                                <Checkbox {...label} 
                                checked={checkboxState.cheaper}
                                onChange={() => handleCheckboxChange('cheaper')}
                                disabled={!checkboxState.cheaper && atLeastTwoChecked}
                            />
                            </div>
                            
                        </div>
                    </div>
                    <div className="tile">
                        <div className="label">
                            <LocalFireDepartmentRoundedIcon fontSize="large"></LocalFireDepartmentRoundedIcon>
                        </div>
                        <div className="checkbox-items">
                            <div className="fire-label">Look Good</div>
                            <div className="checkbox-selection">
                                <Checkbox {...label} 
                                checked={checkboxState.lookGood}
                                onChange={() => handleCheckboxChange('lookGood')}
                                disabled={!checkboxState.lookGood && atLeastTwoChecked}
                            />
                            </div>
                            
                        </div>
                    </div>
                
                </div>
                    <NextButton onClick={handleNextButtonClick} disabled={!isNextButtonEnabled}/>
            </div>
    );
};

export default HomeCheckbox;