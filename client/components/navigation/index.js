import React from 'react';
import styles from './styles.css';
import {Link} from 'react-router';
import UserMenu from './components/userMenu';

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userMenuOpen: false
    };
  }

  toggleUserMenu() {
    this.setState((prevState) => ({
      userMenuOpen: !prevState.userMenuOpen
    }))
  }

  render() {
    let {userMenuOpen} = this.state;

    return (
      <nav className={styles.nav}>
        <div className={styles.masthead}>
          <h1 className={styles.brand}>PEACH Cancer</h1>
          <div className={styles.user}>
            <button className={styles.button} onClick={this.toggleUserMenu.bind(this)}>
              Username
            </button>
            <UserMenu open={userMenuOpen}/>
          </div>
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
  }
};

export default Navigation;
