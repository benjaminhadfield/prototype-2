import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';

class Confirmation extends React.Component {
  render() {
    return (
      <div>Confirmation Page</div>
    )
  }
}

export default connect()(Confirmation)
