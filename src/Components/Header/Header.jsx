import React, { useState } from "react";
import NameBtn from "../NameBtn/NameBtn";
import { useNavigate } from "react-router";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
  const navigation = useNavigate();
  const [burger, setBurger] = useState(false);
  const planetNames = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  function navigate(planet) {
    navigation(`/planets/${planet}`);
  }

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
            {planetNames.map((planet, key) => (
              <NameBtn
                key={key}
                planetName={planet.toUpperCase()}
                onClick={() => navigate(planet)}
              />
            ))}
          </nav>
        </div>
      </div>
      {burger && (
        <div className="  absolute z-1 w-full h-full bg-[#070724]  pt-[69px]  flex flex-col p-[14px]">
          {planetNames.map((planet, key) => (
            <BurgerMenu
              key={key}
              planetName={planet.toUpperCase()}
              onClick={() => {
                navigate(planet);
                setBurger(false);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
export default Header;
