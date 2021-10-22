import React, { useState } from "react";

import logo from "../../public/assets/logo.svg";

import styles from "./Header.module.css";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close = () => setClick(false);

  return (
    <div className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.logo__div}>
          <img src={logo} alt="KRD consulting logo" />
          <div className={styles.icon} onClick={handleClick}>
            {!click ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </div>
        </div>
        <div className={`${styles.navlinks} ${click && styles.open}`}>
          <div className={`${styles.navlink__container}`}>
            <a href="#">About</a>
            <a href="#">FAQS</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonial</a>
          </div>
          <div className={`${styles.navlink__container} `}>
            <a href="#">Sign in</a>
            <a href="#" className={styles.signin}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
