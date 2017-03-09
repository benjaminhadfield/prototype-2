import React from 'react';
import styles from './styles.css';
import {Link} from 'react-router';
import UserMenu from './components/userMenu';
const brandImg = require('../../../../assets/brand/logo.png');

const navigationItems = [
  'Home',
  'Referrals',
  'Triage',
  'Case Preparation',
  'Live MDT',
  'Confirmation',
  'Jobs'
]

const makeLink = (name) => {
  return name.toLowerCase().replace(' ', '-')
}

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
          <div className={styles.separater}></div>
          <h1 className={styles.brand}><img src={brandImg} width="120px"/></h1>
          <div className={styles.user}>
            <button className={styles.button} onClick={this.toggleUserMenu.bind(this)}>
              Navin
            </button>
            <UserMenu open={userMenuOpen}/>
          </div>
        </div>

        <ul className={styles.nav__links}>
        {
          navigationItems.map(item => (
              <Link
                className={styles.nav__links__link}
                activeClassName={styles.nav__links__link__active}
                to={`/${makeLink(item)}`}
                children={item}/>
            )
          )
        }
        </ul>
      </nav>
    );
  }
};

export default Navigation;
