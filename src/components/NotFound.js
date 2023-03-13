import React from "react";
import { Link } from "react-router-dom";
import "../App";
import notFoundImage from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Оops Page Was Not Found!</h1>

      <img src={notFoundImage} alt="#" style={{ width: "300px" }} />

      <Link to="/">Back To Home Page</Link>
    </div>
  );
};

export default NotFound;
