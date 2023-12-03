import React from "react";

const WorldIcon = (props) => {
  return (
    <>
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke={props.color}
          className="my-auto"
        >
          <path
            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
            stroke-width="0.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 14C16.5228 14 21 12.6568 21 11C21 9.34312 16.5228 7.99997 11 7.99997C5.47715 7.99997 1 9.34312 1 11C1 12.6568 5.47715 14 11 14Z"
            stroke-width="0.75"
            stroke-opacity="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 11.0001C6 16.523 8.23858 21.0001 11 21.0001C13.7614 21.0001 16 16.523 16 11.0001C16 5.47727 13.7614 1.00012 11 1.00012C8.23858 1.00012 6 5.47727 6 11.0001Z"
            stroke-width="0.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 1.00003V21"
            stroke-opacity="0.5"
            stroke-width="0.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
    </>
  );
};

export default WorldIcon;
