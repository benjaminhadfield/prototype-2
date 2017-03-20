import React from 'react';
import {connect} from 'react-redux';
import JobsList from './components/jobs';
import {getJobsList, deleteJob} from './actions';
const spinner = require('../../assets/ui/spinner.gif');
import {Button} from 'react-bootstrap'
import styles from './styles.css'

class Jobs extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteJob = this.handleDeleteJob.bind(this)
    this.getJobsList = this.getJobsList.bind(this)
  }

  componentWillMount() {
    this.getJobsList();
  }

  handleDeleteJob(id) {
    this.props.deleteJob(id);
  }

  getJobsList() {
    this.props.getJobsList();
  }

  render() {
    const {jobs, loading} = this.props;

    const spinner = <p>Loading...</p>;
    const jobsList = <JobsList jobs={jobs} deleteCallback={this.handleDeleteJob}/>;

    return (
      <div>
        <div className={styles.masthead}>
          <Button bsStyle="primary" disabled={loading} onClick={this.getJobsList}>
            <i className="fa fa-refresh" aria-hidden="true"></i> Refresh
          </Button>
        </div>
        {loading ? spinner : jobsList}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.containers.jobs.jobs,
  loading: state.containers.jobs.loading
});

const mapDispatchToProps = (dispatch) => ({
  getJobsList: () => dispatch(getJobsList()),
  deleteJob: (id) => dispatch(deleteJob(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
