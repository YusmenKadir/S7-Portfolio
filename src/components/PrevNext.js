import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import "../App.scss";
import { useNavigate } from "react-router";

const PrevNext = (props) => {
  const navigate = useNavigate();

  return (
    <div className="prev-next-container">
      <div className="box-left">
        <GrFormPreviousLink
          size={100}
          onClick={() => navigate(props.previousLink)}
          className="icon"
        />
        <h2>Previous: {props.previousText}</h2>
      </div>
      <div className="box-middle">
        <h1>Thank you for reading!</h1>
      </div>
      <div className="box-right">
        <GrFormNextLink
          size={100}
          onClick={() => navigate(props.nextLink)}
          className="icon"
        />
        <h2>Next: {props.nextText}</h2>
      </div>
    </div>
  );
};

export default PrevNext;
