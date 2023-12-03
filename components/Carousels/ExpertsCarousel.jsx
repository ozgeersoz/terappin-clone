import React from "react";
import Slider from "react-slick";
import fakePsychologyExperts from "../../dummy-data/psychologyExperts";
import ExpertPersonCard from "../../components/Cards/ExpertPersonCard";

const ExpertsCarousel = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    width: "100%",
    style: { backgroundColor: "rgb(249,249,249)" },
    centerPadding: "1em",
  };

  return (
    <>
      <div className="container mx-auto pb-5">
        <Slider id="carousel" {...settings}>
          {fakePsychologyExperts.map((data) => (
            <>
              <ExpertPersonCard datas={data} />
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
      </g>
    </svg>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <rect fill="none" height="24" width="24" />
      <g>
        <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12" />
      </g>
    </svg>
  );
}

export default ExpertsCarousel;
