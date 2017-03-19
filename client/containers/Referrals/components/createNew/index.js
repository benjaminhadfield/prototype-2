import React from 'react';
import styles from './styles.css';
import {FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';

const options = [
  {
    value: 1,
    label: 'Value 1'
  },
  {
    value: 2,
    label: 'Value 2'
  },
  {
    value: 3,
    label: 'Value 3'
  }
]

export class CreateNew extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      // post to API..
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="title">
              <ControlLabel>Title</ControlLabel>
              <FormControl  name="title" type="text" placeholder="Job title goes here..."  />
            </FormGroup>
          <Button bsStyle="primary" type="submit" children="Submit"/>
        </form>
     )
  }
}
