import React from "react";

import styles from "./ChoosePlans.module.css";

import laptop from "../../../public/assets/laptop.png";
import board from "../../../public/assets/board.png";
import tv from "../../../public/assets/Tv.png";
import PlanCard from "./PlanCard/PlanCard";

const free = [
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
];

const standard = [
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
];

const premium = [
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
  "Mauris sem neque",
];

export default function ChoosePlans() {
  return (
    <div className={styles.ChoosePlans}>
      <h1>Choose Your Plan</h1>
      <p>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className={styles.PlanGrid}>
        <PlanCard image={laptop} title="Free Plan" features={free} />
        <PlanCard
          image={tv}
          title="Standard Plan"
          features={standard}
          price={9}
        />
        <PlanCard
          image={board}
          title="Premium Plan"
          features={premium}
          price={12}
          bordered
        />
      </div>
    </div>
  );
}
