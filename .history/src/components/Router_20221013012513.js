import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Auth from "../routes/Auth";
// import Building from "../routes/Building";
// import Home from "../routes/Home";
// import Profile from "../routes/Profile";
// import Trade from "../routes/Trade";
import Header from "./Header";

const AppRouter = ({ onClick, isLoggedIn }) => {
  return (
    <Router>
      <Header />
      <>
      <Route excat path='/' element={<Home />}
      </>
    </Router>
  );
};

export default AppRouter;
