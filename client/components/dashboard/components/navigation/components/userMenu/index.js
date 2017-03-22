import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {setHardcodedUser} from '../../../../../../data/user/actions'
import classNames from 'classnames';
import styles from './styles.css';
import UserMenuItem from './components/userMenuItem'

const UserMenu = ({open, setUser, ...props}) => {
  const handleAdminClick = (e) => setUser({role: 'admin', firstName: 'Navin', lastName: 'Ramachandran'})
  const handleNormalClick = (e) => setUser({role: 'normal', firstName: 'Basic', lastName: 'User'})


  return (
    <div className={classNames(styles.userMenu, {[styles.open]: open})}>
      <UserMenuItem className={styles.userMenu__item} to="#" onClick={handleAdminClick}>Switch to admin user</UserMenuItem>
      <UserMenuItem className={styles.userMenu__item} to="#" onClick={handleNormalClick}>Switch to normal user</UserMenuItem>
      <UserMenuItem className={styles.userMenu__item} to={`/account`}>Account</UserMenuItem>
      <UserMenuItem className={styles.userMenu__item} to={`/logout`}>Logout</UserMenuItem>
    </div>
  )
}

UserMenu.propTypes = {
  open: PropTypes.bool
}

UserMenu.defaultProps = {
  open: false
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setHardcodedUser(user))
})

export default connect(() => ({}), mapDispatchToProps)(UserMenu);
