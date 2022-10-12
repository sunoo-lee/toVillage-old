import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div>
      <h1>
        <span className={styles.title}>오늘 할 일</span>
      </h1>
    </div>
  );
};

export default Main;
