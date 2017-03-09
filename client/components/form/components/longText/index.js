import React from 'react';
import styles from './styles.css';

export const LongText = (props) => {
  return (
    <textarea className={styles.input} placeholder={props.name} {...props}/>
  );
};
