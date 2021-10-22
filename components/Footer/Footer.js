import React from "react";

import styles from "./Footer.module.css";

import logo from "../../public/assets/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={`${styles.Footer__grid} container`}>
        <div className={styles.Footer__Item}>
          <img src={logo} alt="" className={styles.logo} />
          <p>
            Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
            ante egestas ullamcorper. Duis id mauris consequat, ultrices ligula
            at, laoreet mag.
          </p>
        </div>
        <div className={styles.Footer__Item}>
          <h2>Product</h2>
          <ul className={styles.Footer__list}>
            <li>Praesent </li>
            <li> Laoreet</li>
            <li> Laoreet</li>
            <li>Server</li>
          </ul>
        </div>
        <div className={styles.Footer__Item}>
          <h2>Engage</h2>
          <ul className={styles.Footer__list}>
            <li>Mauris </li>
            <li> Aenean</li>
            <li> Linsean</li>
            <li>Lingula</li>
          </ul>
        </div>
        <div className={styles.Footer__Item}>
          <h2>Earn Money</h2>
          <ul className={styles.Footer__list}>
            <li>Ultrices </li>
            <li>Fusce</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
