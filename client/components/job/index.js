import React from 'react';
import {Link} from 'react-router';
import styles from './styles.css';


const Job = ({title, description, assignee, dueDate, ...props}) => {
  return (
    <article className={styles.container}>

      <div className={styles.job}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.details}>
        <p className={styles.details__detail}>Assigned by <Link className={styles.assignee} to="#">{assignee}</Link></p>
        <p className={styles.details__detail}>Due on {dueDate}</p>
      </div>
    </article>
  );
};

export default Job;
