import React from "react";
import nextw from "../img/nextw.svg";

const Center = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-200">
      <div
        style={{ marginBottom: "195px" }}
        className="mb-6 border-b border-black text-4xl font-bold leading-tight mr-4 z-10"
      >
        01
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div
            style={{ fontSize: "110px" }}
            className="font-black tracking-wide awleading-none z-10"
          >
            STICK
          </div>
          <div
            style={{ fontSize: "110px" }}
            className="font-black tracking-wide text-white leading-none z-10"
          >
            OUT
          </div>
        </div>
        <div className="flex flex-col text-white">
          <div className="w-48 font-medium text-xl z-10">
            make your brand the unconscious choise
          </div>
          <div className="w-40 text-sm z-10">
            we understand customer behaviour in order to influence them to act
          </div>
          <div className="flex">
            <div className="font-bold text-red-600 pt-6 z-10">OUR PURPOSE</div>
            <img className="ml-2 mt-6 w-3 z-10" src={nextw} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
