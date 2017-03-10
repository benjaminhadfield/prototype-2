import React, {PropTypes} from "react";
import {connect} from "react-redux";
import styles from './styles.css';
import App from '../schedulerSim/src/App';


class SchedulerComponent extends React.Component {
  render() {
    return (
        <App/>
    );
  }
}

export default SchedulerComponent;
