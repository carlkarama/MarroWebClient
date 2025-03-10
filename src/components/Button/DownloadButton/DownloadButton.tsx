import React from "react";
import "./DownloadButton.css"

interface DownlaodProp {
    onClick?: () => void;
  }

const DownloadButton:React.FC<DownlaodProp> = ({onClick}) =>{
  return (
      <div className="download-report-button">
            <button className="download-report-button" onClick={onClick}>Download Report 📄</button>
      </div>
  );
};

export default DownloadButton;