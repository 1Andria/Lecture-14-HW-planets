import React from "react";
import NameBtn from "../NameBtn/NameBtn";
import { useNavigate } from "react-router";

function Header() {
  const navigation = useNavigate();

  return (
    <>
      <div className=" w-full h-[85px] border-b border-b-white/20 flex justify-between items-center pl-[40px] pr-[40px] max-lg:flex-col max-lg:h-[100px] max-lg:justify-center max-lg:gap-[10px]">
        <h1 className=" text-white text-3xl font-normal  font-antonio ">
          THE PLANETS
        </h1>
        <div className="flex gap-[30px] ">
          <NameBtn
            planetName="MERCURY"
            onClick={() => {
              navigation("/planets/Mercury");
            }}
          />
          <NameBtn
            planetName="VENUS"
            onClick={() => {
              navigation("/planets/Venus");
            }}
          />

          <NameBtn
            planetName="EARTH"
            onClick={() => {
              navigation("/planets/Earth");
            }}
          />
          <NameBtn
            planetName="MARS"
            onClick={() => {
              navigation("/planets/Mars");
            }}
          />
          <NameBtn
            planetName="JUPITER"
            onClick={() => {
              navigation("/planets/Jupiter");
            }}
          />
          <NameBtn
            planetName="SATURN"
            onClick={() => {
              navigation("/planets/Saturn");
            }}
          />
          <NameBtn
            planetName="URANUS"
            onClick={() => {
              navigation("/planets/Uranus");
            }}
          />
          <NameBtn
            planetName="NEPTUNE"
            onClick={() => {
              navigation("/planets/Neptune");
            }}
          />
        </div>
      </div>
    </>
  );
}
export default Header;
