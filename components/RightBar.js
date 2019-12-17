import React from "react";
import menu from "../img/menu.svg";
import nextw from "../img/nextw.svg";
import next from "../img/next.svg";

const style = {
  writingMode: "vertical-lr",
  textOrientation: "upright"
};

const img = {
  transform: "scaleX(-1)"
};

const triangle = {
  width: "0",
  height: "0",
  borderLeft: "20px solid transparent",
  borderRight: "20px solid transparent",
  borderTop: "20px solid #f00"
};

const RightBar = () => {
  return (
    <div className="z-10">
      <div
        style={{ right: "62px", padding: "19.5px" }}
        className="absolute font-bold bg-white"
      >
        EN
      </div>
      <div className="flex flex-col justify-between items-center h-screen">
        <div>
          <img className="bg-black p-6 rounded-tr" src={menu} />
        </div>
        <div style={style} className="font-bold text-white">
          - - - - -
        </div>
        <div>
          <img style={img} className="bg-black p-6" src={nextw} />
          <img className="bg-black p-6 rounded-br" src={nextw} />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
