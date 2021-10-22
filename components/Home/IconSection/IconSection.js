import Image from "next/image"

import styles from "./IconSection.module.css";

import vector2 from "../../../public/assets/Vector.png";
import vector1 from "../../../public/assets/Vector-1.png";
import vector3 from "../../../public/assets/Vector-2.png";

export default function IconSection() {
  return (
    <div className={styles.IconSection}>
      <div className={styles.Icon}>
        <Image src={vector1} alt="" />
        <div className={styles.Icon__Text}>
          <h2>90+</h2>
          <p>User</p>
        </div>
      </div>
      <div className={styles.Icon}>
        <Image src={vector2} alt="" />
        <div className={styles.Icon__Text}>
          <h2>30+</h2>
          <p>Locations</p>
        </div>
      </div>
      <div className={styles.Icon}>
        <Image src={vector3} alt="" />
        <div className={styles.Icon__Text}>
          <h2>50+</h2>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
}
