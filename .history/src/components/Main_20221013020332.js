import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Main.module.css";
import Todo from "./Todo";
import AddForm from "./AddForm";

const Main = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("list");
    if (item) {
      setToDos(item);
    } else
      setToDos([
        "닭가슴살 해동해서 재워두기",
        "치킨 커틀렛 만들기",
        "설거지하고 산책가기",
      ]);
  }, []);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    await setToDos((currentArray) => [...currentArray, toDo]);
    await console.log(toDos);
    setToDo("");
  };
  const onDelete = (event) => {
    const li = event.target.parentElement;
    console.dir(event.target.parentElement);
    li.remove();
  };
  const toggleEditing = (event) => console.log(event);
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
      <AddForm onSubmit={onSubmit} onChange={onChange} toDo={toDo} />
    </div>
  );
};

export default Main;
