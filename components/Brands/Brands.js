import Image from "next/image"
import styles from "./Brands.module.css";

import shopify from "../../public/assets/shopify.png";
import netflix from "../../public/assets/netflix.png";
import amazon from "../../public/assets/amazon.png";
import discord from "../../public/assets/discord.png";
import reddit from "../../public/assets/reddit.png";

export default function Brands() {
  return (
    <div className={styles.Brands}>
      <Image src={netflix} alt="netflix" />
      <Image src={reddit} alt="reddit" />
      <Image src={amazon} alt="amazon" />
      <Image src={discord} alt="discord" />
      <Image src={shopify} alt="shopify" />
    </div>
  );
}
