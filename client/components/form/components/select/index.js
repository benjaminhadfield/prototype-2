import React from 'react';
import styles from './styles.css';

export const Select = ({options, onChange, ...props}) => {
  return (
    <select className={styles.input} {...props}>
      <option value="-1">Select...</option>
      {
        options.map(item => <option key={item.value} value={item.value} children={item.label}/>)
      }
    </select>
  );
};
