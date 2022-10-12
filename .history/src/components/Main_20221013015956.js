import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.title}>오늘 할 일</span>
      </h1>
      <ul className={styles.list}>
        {toDos.map((item, index) => (
          <Todo
            item={item}
            key={index}
            toggleEditing={toggleEditing}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
