import React from "react";

import styles from "./Subscribers.module.css";

export default function Subscribers() {
  return (
    <div className={styles.Subscribers}>
      <div className={styles.Text}>
        <h1>Subscribe Now for Get Special Features!</h1>
        <p>Praesent mollis lobortis nisl nec laoreet.</p>
      </div>
      <button>Subscribe Now</button>
    </div>
  );
}
