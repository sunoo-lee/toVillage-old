import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Header from "./Header";
import Navigation from "./Navigation";

const AppRouter = ({ onClick, isLoggedIn }) => {
  return (
    <Router>
      <Header />
      <Navigation onClick={onClick} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>{isLoggedIn ? <></> : <></>}</Routes>
    </Router>
  );
};

export default AppRouter;
