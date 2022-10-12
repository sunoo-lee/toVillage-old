import React from "react";
import styles from "./MyProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

const Dropdown = () => (
  <div className={styles.card}>
    <div className={styles.userBx}>
      <div className={styles.imgbx}>pic</div>
      <div className={styles.userinfo}>
        <p>User Name</p>
        <p>구역정보나 계정이름...</p>
      </div>
    </div>
    <ul className={styles.menu}>
      <li>
        <FontAwesomeIcon icon={faUser} /> <span>프로필</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faGear} />
        <span>설정</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faRightFromBracket} />
        <span>로그아웃</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faCircleQuestion} />
        <span>또 뭐가 들어가지</span>
      </li>
    </ul>
  </div>
);

export default Dropdown;
