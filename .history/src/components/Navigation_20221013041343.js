import { React } from "react";
import { Link } from "react-router-dom";
// import MiniProfile from "./MiniProfile";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBuilding,
  faCartShopping,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ isNav }) => {
  if (isNav) {
  }
  return (
    <nav id={styles.nav} className={isNav ? styles.nav_active : styles.nav}>
      {/* <MiniProfile /> */}
      <div className={styles.container}>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faListUl} />
              <span>오늘 할 일</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} />
              <span>프로필</span>
            </Link>
          </li>
          <li>
            <Link to="/building">
              <FontAwesomeIcon icon={faBuilding} />
              <span>건물</span>
            </Link>
          </li>
          <li>
            <Link to="/trade">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>교환소</span>
            </Link>
          </li>
        </ul>
        {/* <button onClick={onClick}>SIGN OUT</button> */}
      </div>
    </nav>
  );
};

export default Navigation;
