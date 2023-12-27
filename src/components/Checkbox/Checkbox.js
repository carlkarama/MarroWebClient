import React, { useState } from 'react';
import './Checkbox.css';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';

export const Checkbox = () => {

    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(true);
    const [third, setThird] = useState(true);

    const handleClick = (tileID) => {
        
    }

    return (
        <body>
            <div>
                <div className="checkbox-group">
                    <div className="tile">
                        <input type="checkbox" onChange={() => handleClick()}></input>
                        <div className="label">
                            <OfflineBoltRoundedIcon fontSize="large"></OfflineBoltRoundedIcon>
                        </div>
                    </div>
                    <div className="tile">
                        <input type="checkbox" onChange={() => handleClick()}></input>
                        <div className="label">
                            <AttachMoneyRoundedIcon fontSize="large"></AttachMoneyRoundedIcon>
                        </div>
                    </div>
                    <div className="tile">
                        <input type="checkbox" onChange={() => handleClick()}></input>
                        <div className="label">
                            <LocalFireDepartmentRoundedIcon fontSize="large"></LocalFireDepartmentRoundedIcon>
                        </div>
                    </div>
                </div>
            </div>
        </body>   
  );
}

export default Checkbox;