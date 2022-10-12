import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const onClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [isDropdown, setIsDropdown] = useState(true);
  const [isNav, setIsNav] = useState(false);
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
    console.log("dropdown: " + isDropdown);
  };
  const toggleNav = () => {
    setIsNav(!isNav);
    console.log("Nav: " + isNav);
  };
  return (
    <>
      <AppRouter
        toggleDropdown={toggleDropdown}
        isDropdown={isDropdown}
        toggleNav={toggleNav}
        isNav={isNav}
        onClick={onClick}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}

export default App;
