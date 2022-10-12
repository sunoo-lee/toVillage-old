import { React, useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

const Header = ({ toggleDropdown, isDropdown, toggleNav }) => {
  // const [isDropdown, setIsDropdown] = useState(true);
  // const [isNav, setIsNav] = useState(false);
  // const toggleDropdown = () => {
  //   setIsDropdown(!isDropdown);
  //   console.log(isDropdown);
  // };
  // const toggleNav = () => {
  //   setIsNav(!isNav);
  //   console.log(isNav);
  // };
  return (
    <header id={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_left}>
          <button onClick={toggleNav} className={styles.toggle_btn}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={styles.header_center}>
          {/* {new Date().getFullYear()}/{new Date().getMonth() + 1}/
        {new Date().getDate()} */}
        </div>
        <div className={styles.header_right}>
          <button onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} />
          </button>
          {isDropdown ? <Dropdown /> : <></>}
        </div>
      </div>
    </header>
  );
};

export default Header;
