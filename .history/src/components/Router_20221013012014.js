import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../routes/Profile";
import Header from "./Header";

const AppRouter = ({ onClick, isLoggedIn }) => {
  return (
    <Router>
      <Header />
      <>
        <Route path="/profile" element={<Profile />} />
      </>
    </Router>
  );
};

export default AppRouter;
