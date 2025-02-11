import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "../../Components/Header/Header";
import Stars from "../../assets/stars.png";
import Informational from "../../Components/Informational/Informational";
import LastInfo from "../../Components/LastInfo/LastInfo";

function Planets({ Data }) {
  const { name } = useParams();
  const newData = Data.find((planet) => planet.name === name);

  const [overview, setOverview] = useState(false);
  const [structure, setStructure] = useState(false);
  const [geology, setGeology] = useState(false);

  function overviewActive() {
    setOverview(true);
    setGeology(false);
    setStructure(false);
  }
  function structureActive() {
    setOverview(false);
    setGeology(false);
    setStructure(true);
  }
  function geologyActive() {
    setOverview(false);
    setGeology(true);
    setStructure(false);
  }

  return (
    <>
      <div
        className={` w-full h-screen bg-[#070724] flex flex-col justify-between pb-[56px] items-center `}
      >
        <Header />
        <div className="flex flex-col h-[100%] justify-between pt-[56px] ">
          <Informational newData={newData} />
          <LastInfo newData={newData} />
        </div>
      </div>
    </>
  );
}
export default Planets;
