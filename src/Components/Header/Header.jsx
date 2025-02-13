import React, { useState } from "react";
import NameBtn from "../NameBtn/NameBtn";
import { useNavigate } from "react-router";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
  const navigation = useNavigate();
  const [burger, setBurger] = useState(false);

  function burgerAppear() {
    setBurger(!burger);
  }

  return (
    <>
      <div
        className={`w-full h-[85px] border-b border-b-white/20 flex justify-between items-center pl-[40px] pr-[40px] 
          max-lg:flex-col max-lg:h-[100px] max-lg:justify-center max-lg:gap-[10px] 
          max-[700px]:!justify-between max-[700px]:!h-[74px] max-[700px]:pt-[16px] max-[700px]:pb-[16px]   max-[700px]:!flex-row max-[700px]:pl-[30px] max-[700px]:pr-[30px] 
          ${burger ? "absolute z-10" : ""}`}
      >
        <h1 className=" text-white text-3xl font-normal  font-antonio max-[700px]:text-[28px] ">
          THE PLANETS
        </h1>
        <div
          className={`max-[700px]:flex max-[700px]:flex-col max-[700px]:gap-[5px] max-[700px]:cursor-pointer hidden  `}
          onClick={burgerAppear}
        >
          <div className="w-[24px] h-[2px] bg-white"></div>
          <div className="w-[24px] h-[2px] bg-white"></div>
          <div className="w-[24px] h-[2px] bg-white"></div>
        </div>
        <div className="flex gap-[30px] max-[700px]:hidden ">
          <nav className="flex gap-[30px]  ">
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
          </nav>
        </div>
      </div>
      {burger && (
        <div className="  absolute z-1 w-full h-full bg-[#070724]  pt-[69px]  flex flex-col p-[14px]">
          <BurgerMenu
            planetName="MERCURY"
            onClick={() => {
              navigation("/planets/Mercury");
            }}
            setBurger={setBurger}
          />
          <BurgerMenu
            planetName="VENUS"
            onClick={() => {
              navigation("/planets/Venus");
            }}
            setBurger={setBurger}
          />
          <BurgerMenu
            planetName="EARTH"
            onClick={() => {
              navigation("/planets/Earth");
            }}
            setBurger={setBurger}
          />
          <BurgerMenu
            planetName="MARS"
            onClick={() => {
              navigation("/planets/Mars");
            }}
            setBurger={setBurger}
          />
          <BurgerMenu
            planetName="JUPITER"
            onClick={() => {
              navigation("/planets/Jupiter");
            }}
            setBurger={setBurger}
          />
          <BurgerMenu
            planetName="SATURN"
            onClick={() => {
              navigation("/planets/Saturn");
            }}
            setBurger={setBurger}
          />
          <BurgerMenu
            planetName="URANUS"
            onClick={() => {
              navigation("/planets/Uranus");
            }}
            setBurger={setBurger}
          />
          <BurgerMenu
            planetName="NEPTUNE"
            onClick={() => {
              navigation("/planets/Neptune");
            }}
            setBurger={setBurger}
          />
        </div>
      )}
    </>
  );
}
export default Header;
