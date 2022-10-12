import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
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
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/building" element={<Building />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Auth />} />
          </>
        )}
      </Routes>

      <Routes></Routes>
    </Router>
  );
};

export default AppRouter;
