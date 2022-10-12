import React from "react";
import Main from "../components/Main";

const Home = ({ isNav }) => {
  return (
    <>
      <div className={isNav ? "container active" : "container"}>
        <Main />
      </div>
    </>
  );
};

export default Home;
