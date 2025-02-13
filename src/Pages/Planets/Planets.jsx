import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "../../Components/Header/Header";
import Stars from "../../assets/stars.png";
import Informational from "../../Components/Informational/Informational";
import LastInfo from "../../Components/LastInfo/LastInfo";

function Planets({ Data }) {
  const { name } = useParams();
  const newData = Data.find((planet) => planet.name === name);

  return (
    <>
      <div
        className={` w-full h-screen bg-[#070724] flex flex-col justify-between pb-[56px] items-center `}
        style={{
          backgroundImage: `url(${Stars})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />
        <div className="flex flex-col h-[100%] max-xl:w-[100%] justify-between pt-[56px] max-xl:pr-[30px] max-xl:pl-[30px] ">
          <Informational newData={newData} />
          <LastInfo newData={newData} />
        </div>
      </div>
    </>
  );
}
export default Planets;
