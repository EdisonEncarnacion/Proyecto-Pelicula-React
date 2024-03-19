import React from "react";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={styles.headerContainer}>
      <h1>Movies Ratings</h1>
      <div className={styles.searchContainer}>
        {props.children}
      </div>
	  
    </div>
  );
}

export default Header;