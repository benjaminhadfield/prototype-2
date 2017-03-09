import React, {PropTypes} from "react";
import {connect} from "react-redux";
import styles from './styles.css';
import Job from './components/job';

const JobsList = ({jobs, deleteCallback, ...props}) => {
  return (
    <section className={styles.container}>
      {
        jobs.map((item) => <Job key={item.job_id} deleteCallback={deleteCallback} {...item}/>)
      }
    </section>
  )
}

JobsList.propTypes = {
  jobs: PropTypes.array.isRequired
}

JobsList.defaultProps = {
  jobs: []
}

export default JobsList;
