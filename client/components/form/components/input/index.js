import React from 'react';
import styles from './styles.css';

export const Input = (props) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={props.name}
      {...props}/>
  );
};
