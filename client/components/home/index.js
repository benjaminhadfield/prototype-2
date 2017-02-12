import React from "react";
import Notifications from "react-notify-toast";
import styles from './styles.css'
import Navigation from '../navigation'

class Home extends React.Component {
  render() {
    const {children, checked, value} = this.props;

    return (
      <div>
        <Notifications />
        <Navigation/>
        <div children={children}/>
      </div>
    );
  }
}

export default Home;
