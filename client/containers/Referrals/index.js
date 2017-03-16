import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import {Input, Select} from '../../components/form';
import {Button} from '../../components/button';

class Referrals extends React.Component {
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
        <Select name="abc" options={[{label: 'values', value: 1}, 'values2']}/>
        <Button type="submit" children="Submit"/>
      </form>
    );
  }
}

export default connect()(Referrals);
