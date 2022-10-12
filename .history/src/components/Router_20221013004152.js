import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Building from "./Building";
import Home from "./Home";
import Profile from "./Profile";
import Trade from "./Trade";
import Header from "./Header";
import Navigation from "./Navigation";

const AppRouter = ({ onClick, isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn}
      <Header />
      <Navigation onClick={onClick} />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route
              exact
              path="/"
              element={<Home onClick={onClick} isLoggedIn={isLoggedIn} />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/building" element={<Building />} />
            <Route path="/trade" element={<Trade />} />
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
