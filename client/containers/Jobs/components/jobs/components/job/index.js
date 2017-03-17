import React from 'react';
import {Link} from 'react-router';
import styles from './styles.css';
import classNames from 'classnames';
import {Button} from 'react-bootstrap';

const Job = ({job_id, title, comment, assigned_by_id, due_date, status, deleteCallback, ...props}) => {
  let deleting = false;

  const handleDelete = () => {
    deleting = true
    deleteCallback(job_id);
  };

  return (
    <article className={classNames(styles.container, {[styles.done]: status !== 0, [styles.working]: deleting})}>

      <div className={styles.job}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.description}>{comment}</p>
      </div>

      <div className={styles.right_panel}>
          <div className={styles.details}>
            <p className={styles.details__detail}>Assigned by <Link className={styles.assignee} to="#">{assigned_by_id}</Link></p>
            <p className={styles.details__detail}>Due on {due_date}</p>
          </div>

          <div className={styles.actions}>
            <Button className={"btn btn-danger btn-xs "+styles.btn_delete_patient} onClick={handleDelete} children="x"/>
          </div>
      </div>

    </article>
  );
};

export default Job;
