import React from "react";

import styles from "./CallToAction.module.css";

import image from "../../../public/assets/web-dev.png";

export default function CallToAction() {
  return (
    <div className={styles.CallToAction}>
      <div className={styles.Text}>
        <h1>We Are Everything We Aspire To Be</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci
          condimentum lectus efficitur tempor vel eu massa. Sed molestie turpis
          eget ipsum malesuada dignissim
        </p>
        <button className={styles.getStarted}>Get Started</button>
      </div>
      <img src={image} alt="call to action" />
    </div>
  );
}
