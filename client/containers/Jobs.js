import React from 'react';
import JobsList from '../components/jobs'

const jobsData = [
  {
    title: 'Do Ultrasound',
    description: 'Perform ultrasound on patient X to check he\'s okay.',
    assignee: 'Dr Death',
    dueDate: '18th March, 2017'
  },
  {
    title: 'Set up lab',
    description: 'Set up the lab so it is ready for inspection on Monday.',
    assignee: 'Dr J. Michael',
    dueDate: '01st March, 2017'
  },
]


class Jobs extends React.Component {
  render() {
    return (
      <JobsList jobs={jobsData}/>
    );
  }
}

export default Jobs
