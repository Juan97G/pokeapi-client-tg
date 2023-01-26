import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
   return (
      <header className={`${styles.container} animate__animated animate__fadeInLeft`}>
         <h1>PokeAPI - Code Challenge</h1>
      </header>
   );
};

export default Header;
