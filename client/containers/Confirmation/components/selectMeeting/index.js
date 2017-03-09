import React from 'react';
import styles from './styles.css';

export const SelectMeeting = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5 className={styles.title}>Select Meeting</h5>
      </div>
      <div className={styles.body}>
        <p>Select meeting form...</p>
      </div>
    </div>
  )
}
