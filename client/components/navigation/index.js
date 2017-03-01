import React from 'react';
import styles from './styles.css';
import {Link} from 'react-router';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__masthead}>
        <h1 className={styles.nav__brand}>PEACH Cancer</h1>
        <p>User</p>
      </div>

      <ul className={styles.nav__links}>
      {
        ['Jobs', 'Scheduler'].map(item => (
          <li className={styles.nav__links__link}>
            <Link
              activeClassName={styles.nav__links__link__active}
              to={`/${item.toLowerCase()}`}
              children={item}/>
          </li>
          )
        )
      }
      </ul>
    </nav>
  );
};

export default Navigation;
