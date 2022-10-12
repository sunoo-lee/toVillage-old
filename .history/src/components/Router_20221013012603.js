import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Auth from "../routes/Auth";
// import Building from "../routes/Building";
// import Profile from "../routes/Profile";
// import Trade from "../routes/Trade";
import Header from "./Header";

const AppRouter = ({ onClick, isLoggedIn }) => {
  return (
    <Router>
      <Header />
      <></>
    </Router>
  );
};

export default AppRouter;
