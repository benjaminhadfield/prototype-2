import React from 'react';
import {connect} from 'react-redux';
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
    const {firstName, lastName, role} = this.props;

    return (
      <nav className={styles.nav}>
        <div className={styles.masthead}>
          <div className={styles.separater}></div>
          <h1 className={styles.brand}><img src={brandImg} width="120px"/></h1>
          <div className={styles.user}>
            <button className={styles.button} onClick={this.toggleUserMenu.bind(this)}>
              {`${firstName} ${lastName} (${role})`}
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </button>
            <UserMenu open={userMenuOpen}/>
          </div>
        </div>

        <ul className={styles.nav__links}>
        {
          navigationItems.map(item => (
              <Link
                key={makeLink(item)}
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

const mapStateToProps = (state) => {
  const {firstName, lastName, role} = state.data.user;
  return {firstName, lastName, role}
}

export default connect(mapStateToProps)(Navigation);
