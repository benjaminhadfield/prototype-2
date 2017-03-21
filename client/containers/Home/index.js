import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <h1>Home Page</h1>

    )
  }
}

export default connect()(Home)
