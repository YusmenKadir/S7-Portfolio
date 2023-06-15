import React, { useEffect } from "react";
import { TbTargetArrow } from "react-icons/tb";
import "../App.scss";

const PageIntroduction = ({
  pageName,
  learningOutcome,
  learningOutcome2,
  learningOutcome3,
  pageIntroText,
  outcomeExplanation,
}) => {
  console.log(pageName);
  return (
    <div className={`${pageName}-page-outcomes`}>
      <div className="wrapper-icon">
        <div className="box">
          <div className="icon">
            <TbTargetArrow size={100} color="#eb6f5c" />
          </div>
          <div className="text">
            <h3>{learningOutcome}</h3>
            {learningOutcome2 && (
              <h3 style={{ marginTop: "10px" }}>{learningOutcome2}</h3>
            )}
            {learningOutcome3 && (
              <h3 style={{ marginTop: "10px" }}>{learningOutcome3}</h3>
            )}
            <p style={{ marginTop: "10px", fontSize: "18px" }}>
              {outcomeExplanation ? outcomeExplanation : ""}
            </p>
          </div>
        </div>
      </div>

      <div className="wrapper-text">
        <h1>Page Introduction</h1>
        <p>{pageIntroText}</p>
      </div>
    </div>
  );
};

export default PageIntroduction;
