import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "../../Components/Header/Header";
import Stars from "../../assets/stars.png";
import Informational from "../../Components/Informational/Informational";
import LastInfo from "../../Components/LastInfo/LastInfo";
import HiddenConditions from "../../Components/HiddenConditions/HiddenConditions";

function Planets({ Data }) {
  const { name } = useParams();
  const newData = Data.find((planet) => planet.name === name);
  const [active, setActive] = useState(1);
  function getImage() {
    if (active === 1) return newData.images.planet;
    if (active === 2) return newData.images.internal;
    if (active === 3) return newData.images.planet;
  }

  return (
    <>
      <div
        className={` w-full h-screen bg-[#070724] flex flex-col justify-between pb-[56px] max-[700px]:pb-[10px] items-center `}
        style={{
          backgroundImage: `url(${Stars})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />
        <div className="hidden h-[50px] w-[100%] border border-b-white/20 max-[600px]:flex justify-between pl-[24px] pr-[24px]">
          <HiddenConditions
            cond="OVERVIEW"
            isActive={active === 1}
            onClick={() => setActive(1)}
            planetName={newData.name}
          />
          <HiddenConditions
            cond="STRUCTURE"
            isActive={active === 2}
            onClick={() => setActive(2)}
            planetName={newData.name}
          />
          <HiddenConditions
            cond="SURFACE"
            isActive={active === 3}
            onClick={() => setActive(3)}
            planetName={newData.name}
          />
        </div>

        <div className="flex flex-col h-[100%] max-xl:w-[100%] justify-between pt-[56px] max-xl:pr-[30px] max-xl:pl-[30px] max-[700px]:pt-[20%px] ">
          <Informational
            newData={newData}
            active={active}
            setActive={setActive}
            getImage={getImage}
          />
          <LastInfo newData={newData} />
        </div>
      </div>
    </>
  );
}
export default Planets;
