import styles from "./header.module.scss";
import { useState } from "react";

export default function Header() {
  const [linkClass, setLinkClass] = useState(styles.ulMenu__links);

  const handleLink = () => {
    setLinkClass(styles.ulMenu__links + " " + styles.active)
  }

  return (
    <header className={styles.header}> 
      <div className={`container ${styles.header__container}`}>
        <div className={styles.logo}>
          <h1>Logo</h1>
        </div>

        <ul className={styles.ulMenu}>
          <li className={styles.ulMenu__li}><a href="#Home" className={linkClass} onClick={handleLink}>Home</a></li>
          <li className={styles.ulMenu__li}><a href="#Cards" className={linkClass} onClick={handleLink}>Cards</a></li>
          <li className={styles.ulMenu__li}><a href="#" className={styles.ulMenu__links}>Home</a></li>
          <li className={styles.ulMenu__li}><a href="#" className={styles.ulMenu__links}>Home</a></li>
        </ul>

        <button className={styles.btn__account}>Account</button>
      </div>
    </header>
  )
}