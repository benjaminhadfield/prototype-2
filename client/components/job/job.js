import React from 'react';


const Job = ({title, isComplete, notes, ...props}) => {
  return (
    <div className="job__container">
      <h6>{title}</h6>
      <p>{notes}</p>
    </div>
  );
}

export default Job;
