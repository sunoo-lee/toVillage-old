import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Building from "../routes/Building";
import Trade from "../routes/Trade";
import Header from "./Header";
import Navigation from "./Navigation";

const AppRouter = ({
  toggleDropdown,
  isDropdown,
  toggleNav,
  isNav,
  onClick,
  isLoggedIn,
}) => {
  return (
    <Router>
      {isLoggedIn}
      <Header
        toggleDropdown={toggleDropdown}
        isDropdown={isDropdown}
        toggleNav={toggleNav}
      />
      <Navigation isNav={isNav} />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home isNav={isNav} />} />
            <Route path="/profile" element={<Profile isNav={isNav} />} />
            <Route path="/building" element={<Building isNav={isNav} />} />
            <Route path="/trade" element={<Trade isNav={isNav} />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
