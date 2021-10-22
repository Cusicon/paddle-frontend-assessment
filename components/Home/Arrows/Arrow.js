import React from "react";

import forward from "../../../public/assets/Vector-forward.png";
import backward from "../../../public/assets/Vector-back.png";

import styles from "./Arrow.module.css";

export default function Arrow() {
  return (
    <div className={styles.Arrow}>
      <img src={backward} alt="" className={styles.back} />
      <img src={forward} alt="" className={styles.forward} />
    </div>
  );
}
