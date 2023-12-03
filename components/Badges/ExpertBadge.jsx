import React from "react";

const ExpertBadge = (props) => {
  return (
    <>
      <div
        style={{ width: "auto", height: "100%", borderRadius: "10px", backgroundColor: "#E6E4E4", fontSize:"0.6em", paddingRight:"1em", paddingLeft:"1em" }}
        className="flex justify-center justify-items-center p-1 mb-2"
      >
        {props.tag}
      </div>
    </>
  );
};

export default ExpertBadge;
