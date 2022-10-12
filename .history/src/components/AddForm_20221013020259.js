import React, { memo } from "react";
import styles from "./Main.module.css";

const AddForm = memo(({ onSubmit, onChange, toDo }) => {
  return (
    <form className={styles.add_form} onSubmit={onSubmit}>
      <input
        className={styles.list_input}
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="투두리스트 작성..."
      />
      <button className={styles.add_btn}>추가하기</button>
    </form>
  );
});

export default AddForm;
