import React from 'react';
import {connect} from 'react-redux';
import JobsList from '../../components/jobs';
import {getJobsList} from './actions';
const spinner = require('../../assets/ui/spinner.gif');
import {Button} from '../../components/button'
import styles from './styles.css'

class Jobs extends React.Component {
  componentWillMount() {
    this.getJobsList();
  }

  getJobsList() {
    this.props.getJobsList();
  }

  render() {
    const {jobs, loading} = this.props;

    const spinner = <p>Loading...</p>;
    const jobsList = <JobsList jobs={jobs}/>;

    return (
      <div>
        <div className={styles.masthead}>
          <Button disabled={loading} onClick={this.getJobsList.bind(this)}>Refresh</Button>
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
  getJobsList: () => dispatch(getJobsList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
