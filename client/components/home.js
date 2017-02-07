import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router"
import Notifications from "react-notify-toast";
import {toggleCheck, incNumber, decNumber} from "../actions";

class Home extends React.Component {
  render() {
    const {checked, value} = this.props;

    return (
      <div>
        <Notifications />
        <nav>
          <h1>Hello Team 35!</h1>
          <h4>We can do this.</h4>
          <ul>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/scheduler">Scheduler</Link></li>
          </ul>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
