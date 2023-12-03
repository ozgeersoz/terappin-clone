import React from "react";
import ReactStars from "react-stars";
import VideoIcon from "../Common/VideoIcon";
import PhoneIcon from "../Common/PhoneIcon";
import WorldIcon from "../Common/WorldIcon";
import ExpertBadge from "../Badges/ExpertBadge";
import RightArrow from "../Common/RightArrow";

const ExpertPersonCard = (props) => {
  return (
    <>
      <div className="card mx-0">
        <ul>
          <li>
            <div className="card-img-top mt-3 mx-auto">
              <img
                src={props.datas.image}
                style={{ width: "7rem", height: "7rem" }}
              ></img>
            </div>
            {props.datas.isOnline ? (
              <div className="isOnline-icon text-xs mx-auto">Çevrim içi</div>
            ) : null}
          </li>
          <li>
            <ReactStars
              className="flex justify-center"
              value={props.datas.rating}
              count={5}
              size={24}
              color2="#52B69A"
            />
          </li>
          <li>
            <div className="text-center mt-2 font-semibold text-lg">
              {props.datas.fullName}
            </div>
          </li>
          <li>
            <div className="text-center mt-3 text-sm">{props.datas.title}</div>
          </li>
          <li className="flex mt-2 justify-center">
            <div className="video-container flex mr-2">
              <VideoIcon />
              <p className="ml-1">{props.datas.communications[0].times}</p>
            </div>
            <div className="phone-container flex mr-2">
              <PhoneIcon />
              <p className="ml-1">{props.datas.communications[1].times}</p>
            </div>
            <div className="language-container flex">
              <WorldIcon color="#366C95" />
              <p className="ml-1">{props.datas.languages.join("|")}</p>
            </div>
          </li>
          <li>
            <div className="flex flex-wrap space-x-4 mt-4 line-clamp-3">
              {props.datas.expertiseTags.map((tag) => (
                <>
                  <ExpertBadge tag={tag} />
                </>
              ))}
            </div>
          </li>
          <li className="flex justify-center items-center mt-4 mb-3">
            <p style={{color:"#575757"}} className="mr-1 font-semibold">Eğitim ve Sertifikaları Gör</p>
            <RightArrow />
          </li>
          <li className="flex" style={{ borderTop: "0.1em solid black" }}>
            <p className="font-semibold mt-2 mx-auto" style={{color:"#575757"}}>
              ₺{props.datas.pricePerSession}/Seans <span style={{color:"#575757", opacity:"0.7"}}>{`(Minimum Tutar)`}</span> 
            </p>
          </li>
          <li className="flex justify-center items-center">
            <div className="start-btn mt-3 text-sm"><a href="#">Hemen Başla</a></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ExpertPersonCard;
