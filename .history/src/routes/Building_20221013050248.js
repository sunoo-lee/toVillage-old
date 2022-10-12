import React from "react";
import Area from "../components/Area";

const Building = ({ isNav }) => {
  return (
    <>
      <div className={isNav ? "container" : "container active"}>
        <Area />
      </div>
    </>
  );
};

export default Building;
