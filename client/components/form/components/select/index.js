import React from 'react';
import styles from './styles.css';
const _Select = require('react-select');

export const Select = ({options, onChange, ...props}) => {
  return (
    <_Select
      options={options}
      onChange={onChange}
      {...props}/>
  );
};
