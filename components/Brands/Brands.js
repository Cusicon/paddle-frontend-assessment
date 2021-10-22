import React from "react";

import styles from "./Brands.module.css";

import shopify from "../../public/assets/shopify.png";
import netflix from "../../public/assets/netflix.png";
import amazon from "../../public/assets/amazon.png";
import discord from "../../public/assets/discord.png";
import reddit from "../../public/assets/reddit.png";

export default function Brands() {
  return (
    <div className={styles.Brands}>
      <img src={netflix} alt="" />
      <img src={reddit} alt="" />
      <img src={amazon} alt="" />
      <img src={discord} alt="" />
      <img src={shopify} alt="" />
    </div>
  );
}
