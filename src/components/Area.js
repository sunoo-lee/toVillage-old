import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faPenRuler,
  faTreeCity,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Area.module.css";

const Area = () => {
  const [img, setImg] = useState([]);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(-${current}00%)`,
  });

  const images = ["test1", "test2", "test3"];

  useEffect(() => {
    setStyle({
      transform: `translateX(-${current}00%)`,
    });
  }, [current]);

  useEffect(() => {
    setImg(images);
  }, []);
  const plus = () => {
    if (current < img.length - 1) setCurrent((prev) => prev + 1);
    else if (current <= img.length - 1) return;
  };
  const minus = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
    else if (current <= 0) return;
  };
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.title}>건물 짓기</span>
      </h1>

      <div className={styles.carousel}>
        <button onClick={minus}>
          <FontAwesomeIcon className="fa-10x" icon={faCaretLeft} />
        </button>
        <div className={styles.window}>
          <div className={styles.carousel_container}>
            {/* {img.map((img, index) => (
            <div key={index} style={style} className={styles.inner}>
              <h2>{img}</h2>
            </div>
          ))} */}
            <div style={style} className={styles.inner}>
              <FontAwesomeIcon className="fa-10x" icon={faBuildingColumns} />
              <h2>Collage</h2>
            </div>
            <div style={style} className={styles.inner}>
              <FontAwesomeIcon className="fa-10x" icon={faTreeCity} />
              <h2>City</h2>
            </div>
            <div style={style} className={styles.inner}>
              <FontAwesomeIcon className="fa-10x" icon={faPenRuler} />
              <h2>
                Coming
                <br />
                Soon...
              </h2>
            </div>
          </div>
        </div>
        <button onClick={plus}>
          <FontAwesomeIcon className="fa-10x" icon={faCaretRight} />
        </button>
      </div>
    </div>
  );
};

export default Area;
