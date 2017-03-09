import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';

class Referrals extends React.Component {
  render() {
    return (
      <div>Referrals Page</div>
    )
  }
}

export default connect()(Referrals)
