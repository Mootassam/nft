import React from "react";
import { logoHeader } from "../../assets/images";
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
          </ul>
        </div>
        <div className={styles.header__button}>
          <li> Connect Wallet </li>
        </div>
      </header>
    </div>
  );
}

export default Header;
