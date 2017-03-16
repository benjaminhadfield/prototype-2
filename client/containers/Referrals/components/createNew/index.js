import React from 'react';
import styles from './styles.css';
import {Button} from '../../../../components/button';
import {Input, Select} from '../../../../components/form';

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
          <Input name="Field A"/>
          <Input name="Field B"/>
          <Select name="abc" options={options}/>
          <Button type="submit" children="Submit"/>
        </form>
     )
  }
}
