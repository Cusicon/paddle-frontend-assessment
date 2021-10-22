import Image from "next/image"

import forward from "../../../public/assets/Vector-forward.png";
import backward from "../../../public/assets/Vector-back.png";

import styles from "./Arrow.module.css";

export default function Arrow() {
  return (
    <div className={styles.Arrow}>
      <Image src={backward} alt="" className={styles.back} />
      <Image src={forward} alt="" className={styles.forward} />
    </div>
  );
}
