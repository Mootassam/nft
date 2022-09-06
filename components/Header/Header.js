import React from "react";
import { logoHeader, Group } from "../../assets/images";
import Image from "next/image";
function Header(props) {
  const styles = props.styles;
  return (
    <div className={styles.header}>
      <header>
        <div className={styles.header__image}>
          <Image src={logoHeader} />
        </div>
        <div className={styles.header__links}>
          <ul>
            <li>Explore</li>
            <li>Creators</li>
            <li>Community</li>
            <li className={styles.header__button}>Connect Wallet</li>
          </ul>
        </div>
      </header>

      <div className={styles.header__content}>
        <div className={styles.content__left}>
          <h1>
            Explore, Buy and Sell the{" "}
            <div className={styles.yellow}> Best NFTs! </div>
          </h1>
        </div>

        <div className={styles.content__right}>
          <Image src={Group} />
        </div>
      </div>
    </div>
  );
}

export default Header;
