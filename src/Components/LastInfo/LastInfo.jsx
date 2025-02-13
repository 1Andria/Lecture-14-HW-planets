import React from "react";
import AboutDiv from "../AboutDiv/AboutDiv";
function LastInfo({ newData }) {
  return (
    <>
      <div className=" flex gap-[30px] max-xl:justify-between max-xl:gap-[0px] max-md:flex-col max-md:gap-[8px] ">
        <AboutDiv
          about="ROTATION TIME"
          number={newData.rotation.toUpperCase()}
        />
        <AboutDiv
          about="REVOLUTION TIME"
          number={newData.revolution.toUpperCase()}
        />
        <AboutDiv about="RADIUS" number={newData.radius.toUpperCase()} />
        <AboutDiv
          about="AVERAGE TEMP."
          number={newData.temperature.toUpperCase()}
        />
      </div>
    </>
  );
}

export default LastInfo;
