import React from "react";
import Notifications from "react-notify-toast";
import {connect} from 'react-redux';
import styles from './styles.css';
import Navigation from './components/navigation';
import {getOpenEhrSessionId} from '../../data/user/actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.getOpenEhrSessionId();
  }

  render() {
    const {children, checked, value, location} = this.props;
    const title = location.pathname.slice(1)

    const ucFirst = str => str.slice(0, 1).toUpperCase() + str.slice(1)

    return (
      <div>
        <Notifications/>
        <Navigation/>
        <div className={styles.page}>
          <h1 className={styles.title}>{ucFirst(title)}</h1>
          <div children={children}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getOpenEhrSessionId: () => dispatch(getOpenEhrSessionId())
})

export default connect(() => ({}), mapDispatchToProps)(Dashboard);
