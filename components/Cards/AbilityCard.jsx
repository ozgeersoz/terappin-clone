import React from "react";

const AbilityCard = (props) => {
  return (
    <>
      <div
        className="overflow-hidden shadow-lg"
        style={{
          borderTop: "0.6em solid #FE7163",
          width: "15rem",
          height: "22em",
          backgroundColor: "#fff",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
      >
        <img class="w-full" src={props.image} alt="Ability" />
        <div class="py-1">
          <div
            class="font-bold text-xl mb-2 text-center"
            style={{ color: "#4344E5" }}
          >
            {props.title}
          </div>
          <div className="text-center">
            <a
              id="ability-card-link"
              className="text-center pt-4 font-medium"
              style={{ borderBottom: "1px solid black" }}
            >
              DAHA FAZLA
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbilityCard;
