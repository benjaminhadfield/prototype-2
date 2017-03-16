import React from 'react';
import styles from './styles.css';

export const Input = ({name, ...props}) => {
  const ucFirst = (str) => str ? str[0].toUpperCase() + str.slice(1) : str
  return (
    <div>
      <label className={styles.label} htmlFor={name}>{ucFirst(name)}</label>
      <input
        id={name}
        className={styles.input}
        type="text"
        name={name}
        placeholder={name}
        {...props}/>
    </div>
  );
};
