import { React } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import MiniProfile from "./MiniProfile";

const Header = () => (
  <header id={styles.header}>
    <div className={styles.container}>
      <div className={styles.header_left}>
        <button className={styles.toggle_btn}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className={styles.header_center}>
        {/* {new Date().getFullYear()}/{new Date().getMonth() + 1}/
        {new Date().getDate()} */}
      </div>
      <div className={styles.header_right}>
        <button>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <MiniProfile />
      </div>
    </div>
  </header>
);

export default Header;
