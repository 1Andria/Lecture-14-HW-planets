import React from "react";

function NameBtn({ planetName, onClick }) {
  return (
    <>
      <button
        className="text-xs text-white font-normal cursor-pointer  font-spartan max-sm:txt-[15px]"
        onClick={onClick}
      >
        {planetName}
      </button>
    </>
  );
}

export default NameBtn;
