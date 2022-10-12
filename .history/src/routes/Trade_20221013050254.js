import React from "react";
import TradingShop from "../components/TradingShop";

const Trade = ({ isNav }) => {
  return (
    <>
      <div className={isNav ? "container" : "container active"}>
        <TradingShop />
      </div>
    </>
  );
};

export default Trade;
