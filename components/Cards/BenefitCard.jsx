import React from 'react'

const BenefitCard = (props) => {
  return (
    <>
        <div
        className="overflow-hidden"
        style={{
            width: "22em",
            height: "15em"
        }}
      >
        <img className="mx-auto w-24" src={props.image} alt="Benefit" />
        <div class="py-1">
          <div
            class="font-bold text-xl mb-2 text-center"
            style={{ color: "#25165E", marginTop:"1em" }}
          >
            {props.title}
          </div>
          <div className="text-center" style={{color:"#808080"}}>
            {props.description}
          </div>
        </div>
      </div>
    </>
  )
}

export default BenefitCard
