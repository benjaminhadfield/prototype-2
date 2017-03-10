import React from 'react';
import styles from './styles.css';

export const Date = (props) => {
  return (
    <input className={styles.input} type="date" {...props}/>
  );
};
