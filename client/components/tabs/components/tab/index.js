import React from 'react';
import styles from './styles.css';
import classNames from 'classnames'

export const Tab = ({isActive, ...props}) => (
  <div
    className={classNames(styles.tab, {[styles.active]: isActive})}
    {...props}/>
)
