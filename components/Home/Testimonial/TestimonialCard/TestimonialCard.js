import React from "react";

import styles from "./TestimonialCard.module.css";

import star from "../../../../public/assets/star.png";

export default function TestimonialCard(props) {
  return (
    <div
      className={`${styles.TestimonialCard} ${
        props.bordered && styles.bordered
      }`}
    >
      <div className={styles.Identifier}>
        <div className={styles.ImageSection}>
          <img src={props.image} alt="" />
          <div className={styles.name}>
            <h2>{props.name}</h2>
            <p>{props.location}</p>
          </div>
          <div className={styles.rating}>
            <h2>4.5</h2>
            <img src={star} alt="" />
          </div>
        </div>
      </div>
      <p>
        “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut
        rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu
        ex”
      </p>
    </div>
  );
}
