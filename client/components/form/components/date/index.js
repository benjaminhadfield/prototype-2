import React from 'react';
import styles from './styles.css';
import {SingleDatePicker} from 'react-dates';

export const Date = (props) => {
  return (
    <input className={styles.input} type="date" {...props}/>
  );
};
