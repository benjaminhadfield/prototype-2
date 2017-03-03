import React, {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import UserMenuItem from './components/userMenuItem'

const UserMenu = ({open, ...props}) => {
  return (
    <div className={classNames(styles.userMenu, {[styles.open]: open})}>
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

export default UserMenu;
