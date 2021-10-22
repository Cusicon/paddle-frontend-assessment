import React from "react";

import styles from "./Features.module.css";

import Piano from "../../../public/assets/piano.png";

import listStart from "../../../public/assets/list-start.png";

export default function Features() {
  return (
    <div className={styles.Features}>
      <img src={Piano} alt="" />
      <div className={styles.Text}>
        <h1>Features We Provide For You</h1>
        <p>
          Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero
          eu sem finibus lacinia nec pulvinar.
        </p>
        <p className={styles.list}>
          <img src={listStart} alt="" /> Curabitur tempor justo
        </p>
        <p className={styles.list}>
          <img src={listStart} alt="" /> Curabitur tempor justo
        </p>
        <p className={styles.list}>
          <img src={listStart} alt="" /> Curabitur tempor justo
        </p>
        <p className={styles.list}>
          <img src={listStart} alt="" /> Curabitur tempor justo
        </p>
      </div>
    </div>
  );
}
