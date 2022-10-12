import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const onClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <AppRouter onClick={onClick} isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
