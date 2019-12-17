import React from "react";
import menu from "../img/menu.svg";

const style = {
  writingMode: "vertical-rl",
  textOrientation: "mixed"
};

const LeftBar = () => {
  return (
    <div className="z-10">
      <div
        style={{ left: "118px" }}
        className="absolute mt-8 font-semibold text-red-600 text-2xl"
      >
        Standout.
      </div>
      <div className="flex flex-col justify-between items-center h-screen bg-white">
        <img className="bg-black p-6 rounded-tl" src={menu} />
        <div style={style} className="font-semibold tracking-widest">
          OUR SERVICES
        </div>
        <div />
      </div>
    </div>
  );
};

export default LeftBar;
