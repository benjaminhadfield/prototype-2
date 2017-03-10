import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';
import {createNewJob} from './actions';
import {CreateJobForm} from './components/createJobForm';
import {SelectMeeting} from './components/selectMeeting';
import {SelectPatient} from './components/selectPatient';

class Confirmation extends React.Component {
  handleSubmit(data) {
    this.props.createNewJob(data);
  }

  render() {
    const {loading} = this.props;
    return (
      <div>
        <div className={styles.select}>
          <SelectMeeting/>
          <SelectPatient/>
        </div>
        <div className={styles.form}>
          <CreateJobForm loading={loading} submitCallback={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.containers.confirmation.loading
})

const mapDispatchToProps = (dispatch) => ({
  createNewJob: (data) => dispatch(createNewJob(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
