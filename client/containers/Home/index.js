import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>Home Page</div>
    )
  }
}

export default connect()(Home)
