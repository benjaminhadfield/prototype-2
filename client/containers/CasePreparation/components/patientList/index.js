import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class PatientList extends React.Component {

  render() {


    return (
          <ListGroup fill>
            <ListGroupItem>Patient 1</ListGroupItem>
            <ListGroupItem>Patient 2</ListGroupItem>
            <ListGroupItem>Patient 3</ListGroupItem>
          </ListGroup>
    )
  }
}

export default connect()(PatientList)
