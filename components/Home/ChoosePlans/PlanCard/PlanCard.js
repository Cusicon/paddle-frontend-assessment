import Image from "next/image"

import styles from "./PlanCard.module.css";

import marker from "../../../../public/assets/mark.png";

export default function PlanCard(props) {
  return (
    <div className={`${styles.planCard} ${props.bordered && styles.bordered}`}>
      <Image src={props.image} alt="" />
      <h1>{props.title}</h1>
      <div className={styles.list}>
        {props.features.map((feature) => (
          <p key={feature}>
            <Image src={marker} alt="" /> {feature}
          </p>
        ))}
      </div>
      {props.price ? (
        <div className={styles.price__div}>
          <span className={styles.price}>{props.price}$</span>
          <span>/mo</span>
        </div>
      ) : (
        <h1>Free</h1>
      )}
      <button>Select</button>
    </div>
  );
}
