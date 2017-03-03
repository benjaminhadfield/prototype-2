import React from 'react';
import {Link} from 'react-router';
import styles from './styles.css';

const UserMenuItem = (props) => {
  return (
    <Link className={styles.link} {...props}/>
  );
};

export default UserMenuItem;
