import React from "react";
import profilephoto from "../profilephoto.jpg";
import "../profile/profilephoto.css";

export default function () {
  return (
    <div>
      <img src={profilephoto} id="myimg" />
    </div>
  );
}
