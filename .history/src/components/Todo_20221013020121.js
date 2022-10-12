import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Main.module.css";

const Todo = (item, index, toggleEditing, onDelete) => {
  return (
    <li className={styles.item} key={index}>
      <div>
        <input type="checkbox" />
        <span>{item}</span>
      </div>
      <div>
        <button onClick={toggleEditing}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Todo;
