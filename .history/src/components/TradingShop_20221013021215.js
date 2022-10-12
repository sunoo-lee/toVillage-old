import React from "react";

const TradingShop = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.title}>교환소</span>
      </h1>
      <div className={styles.table}>
        <ul>
          <li>
            <div className={`${styles.materials} ${styles.material_1}`}>
              재료1
            </div>
          </li>
          <li>
            <div className={`${styles.materials} ${styles.material_2}`}>
              재료2
            </div>
          </li>
          <li>
            <div className={`${styles.materials} ${styles.material_3}`}>
              재료3
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TradingShop;
