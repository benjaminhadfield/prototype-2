import React from 'react';
import styles from './styles.css';

export const Select = ({options, onChange, name, ...props}) => {
  const ucFirst = (str) => str ? str[0].toUpperCase() + str.slice(1) : str
  return (
    <div>
      <label htmlFor={name}>{ucFirst(name)}</label>
      <select id={name} name={name} className={styles.input} {...props}>
        <option value="-1">Select...</option>
        {
          options.map(item => <option key={item.value} value={item.value} children={item.label}/>)
        }
      </select>
    </div>
  );
};
