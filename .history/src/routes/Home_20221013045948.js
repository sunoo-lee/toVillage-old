import React from "react";
import Main from "../components/Main";

const Home = ({ isNav }) => {
  return (
    <>
      <div className={isNav ? "container" : "container active"}>
        <Main />
      </div>
    </>
  );
};

export default Home;
