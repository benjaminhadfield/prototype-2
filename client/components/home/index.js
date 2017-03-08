import React from "react";
import Notifications from "react-notify-toast";
import styles from './styles.css'
import Navigation from '../navigation'

class Home extends React.Component {
  render() {
    const {children, checked, value, location} = this.props;
    const title = location.pathname.slice(1)

    const ucFirst = str => str.slice(0, 1).toUpperCase() + str.slice(1)

    return (
      <div>
        <Notifications />
        <Navigation/>
        <div className={styles.page}>
          <h1 className={styles.title}>{ucFirst(title)}</h1>
          <div children={children}/>
        </div>
      </div>
    );
  }
}

export default Home;
