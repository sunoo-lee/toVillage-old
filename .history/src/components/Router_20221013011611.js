import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

const AppRouter = ({ onClick, isLoggedIn }) => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default AppRouter;
