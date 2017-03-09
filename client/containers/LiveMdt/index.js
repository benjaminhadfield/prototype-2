import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';

class LiveMdt extends React.Component {
  render() {
    return (
      <div>Live MDT Page</div>
    )
  }
}

export default connect()(LiveMdt)
