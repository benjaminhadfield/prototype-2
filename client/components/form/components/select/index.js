import React from 'react';
import styles from './styles.css';
import {default as _Select} from 'react-select';

export const Select = ({options, onChange, ...props}) => {
  return (
    <_Select
      options={options}
      onChange={onChange}
      {...props}/>
  );
};
