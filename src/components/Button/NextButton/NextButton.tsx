import React from 'react';
import './NextButton.css';
import { Link } from 'react-router-dom';

interface NextButtonProps {
  route: string;
  onClick?: () => void;
  disabled?: boolean;
  nextPageName?: string;
}

const NextButton: React.FC<NextButtonProps> = ({ route, onClick, disabled = false, nextPageName = 'Next'}) => {
  return (
    <Link to={route}>
      <div className="next-button">
        <button onClick={onClick} disabled={disabled} role="next-btn">{nextPageName}</button>
      </div>
    </Link>
  );
};

export default NextButton;