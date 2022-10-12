import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Building from "../routes/Building";
import Header from "./Header";
import Navigation from "./Navigation";

const AppRouter = ({ onClick, isLoggedIn }) => {
  return (
    <Router>
      <Header />
      <Navigation onClick={onClick} />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Building />} />
          </>
        ) : (
          <></>
        )}
      </Routes>

      <Routes></Routes>
    </Router>
  );
};

export default AppRouter;
