import { React } from "react";
import styles from "./MyProfile.module.css";

const MyProfile = () => (
  <div className={styles.container}>
    <div className={styles.pic}>프로필 사진</div>
    <div className={styles.nickname}>닉네임</div>
    <div className={styles.area}>마을 - 구역</div>
    <ul className={styles.materials}>
      <li>
        <div>재료1</div>
        <span>갯수</span>
      </li>
      <li>
        <div>재료2</div>
        <span>갯수</span>
      </li>
      <li>
        <div>재료3</div>
        <span>갯수</span>
      </li>
    </ul>
    <button className={styles.box_btn}>상자 x n</button>
  </div>
);

export default MyProfile;
