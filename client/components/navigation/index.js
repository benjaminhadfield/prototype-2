import React from 'react';
import styles from './styles.css';
import {Link} from 'react-router';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
        <h1 className={styles.nav__brand}>Peach</h1>

        <ul className={styles.nav__links}>

          <li className={styles.nav__links__link}>
            <Link to="/jobs">Jobs</Link>
          </li>

          <li className={styles.nav__links__link}>
            <Link to="/scheduler">Scheduler</Link>
          </li>

        </ul>
      </nav>
  );
};

export default Navigation;
