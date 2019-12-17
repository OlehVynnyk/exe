import React from "react";
import LeftBar from "./LeftBar";
import Center from "./Center";
import RightBar from "./RightBar";
import picture from "../img/picture.jpg";

const Home = () => {
  return (
    <div>
      <img className="absolute object-cover w-full h-screen" src={picture} />
      <div className="flex">
        <LeftBar />
        <Center />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
