import React, { useState } from "react";
import WorldIcon from "../Common/WorldIcon";
import DownArrow from "../Common/DownArrow";

const LanguageDropdown = () => {
  const [isClicked, setIsClicked] = useState(false);

  // React ile toggle mantığı
  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  const handleArrow = () => {
    if (isClicked) {
      return { transform: "rotate(180deg)", transition: "transform 0.5s ease" };
    } else {
      return { transform: "rotate(0deg)", transition: "transform 0.5s ease" };
    }
  }

  return (
    <>
      <div className="dropdown" onClick={handleClicked}>
        <div
          id="language-btn"
          style={
            isClicked
              ? { backgroundColor: "#E8E9FD", borderRadius: "20px 20px 0 0", borderBottom: "none" }
              : {
                  backgroundColor: "transparent",
                  borderRadius: "20px 20px 20px 20px",
                }
          }
          className="cursor-pointer"
        >
          <WorldIcon color="#322460"/>
          <span className="mr-4 ml-1">TR</span>
          <DownArrow style={handleArrow()}/>
        </div>

        <div
          className="dropdown-content overflow-hidden h-0 b-0"
          style={
            isClicked
              ? {
                  overflow: "visible",
                  height: "auto",
                  border: "1px solid #322460",
                  backgroundColor: "white",
                  transition: "all 0.5s ease",
                }
              : { overflow: "hidden", height: "0", border:"none", transition: "all 0.5s ease" }
          }
        >
          {/* dropdown-item'ları ilk başta overflow-hidden h-0 ile gizlensin */}
          <div className="dropdown-items">
            <a className="dropdown-item" href="#">EN</a>
          </div>
          <div />
        </div>
      </div>
    </>
  );
};

export default LanguageDropdown;
