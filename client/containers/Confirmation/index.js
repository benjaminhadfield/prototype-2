import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';
import Notifications, {notify} from 'react-notify-toast';
import {createNewJob} from './actions';
import {CreateJobForm} from './components/createJobForm';
import {SelectMeeting} from './components/selectMeeting';
import {SelectPatient} from './components/selectPatient';
import {isAdminOrAbove} from '../../services/permissions'

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.show = notify.createShowQueue();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)
  }

  handleSubmit(data) {
    this.props.createNewJob(data, this.onSuccess, this.onFailure);
  }

  onSuccess() {
    this.show('Job Created!', 'success');
  };

  onFailure() {
    this.show('Error creating job.', 'error');
  }

  render() {
    const {loading, role} = this.props;

    return (
      <div>
        {
          // display create form to admins or higher
          isAdminOrAbove(role)
            ? (
              <div>
                <div className={styles.select}>
                  <SelectMeeting/>
                  <SelectPatient/>
                </div>
                <div className={styles.form}>
                  <CreateJobForm
                    loading={loading}
                    submitCallback={this.handleSubmit.bind(this)}/>
                </div>
              </div>
            )
            : (
              <div>Please <a href="#">login</a></div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.containers.confirmation.loading,
  role: state.data.user.role
})

const mapDispatchToProps = (dispatch) => ({
  createNewJob: (data, successCallback, failureCallback) => dispatch(createNewJob(data, successCallback, failureCallback))
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
