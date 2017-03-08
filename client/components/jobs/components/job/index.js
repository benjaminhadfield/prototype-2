import React from 'react';
import {Link} from 'react-router';
import styles from './styles.css';

const Job = ({title, comment, assigned_by_id, due_date, ...props}) => {
  return (
    <article className={styles.container}>

      <div className={styles.job}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.description}>{comment}</p>
      </div>

      <div className={styles.details}>
        <p className={styles.details__detail}>Assigned by <Link className={styles.assignee} to="#">{assigned_by_id}</Link></p>
        <p className={styles.details__detail}>Due on {due_date}</p>
      </div>
    </article>
  );
};

export default Job;
