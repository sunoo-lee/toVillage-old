import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

const AppRouter = ({ onClick, isLoggedIn }) => {
  return (
    <Router>
      <Header />
      <Navigation />
      <></>
    </Router>
  );
};

export default AppRouter;
