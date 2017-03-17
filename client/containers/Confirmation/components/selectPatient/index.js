import React from 'react';
import styles from './styles.css';
import {Select} from '../../../../components/form';
import {Panel} from 'react-bootstrap';


export class SelectPatient extends React.Component {
  render() {
    const options = [
      {value: 5869, label: 'Donald (T)Lump'},
      {value: 1440, label: 'Barack Obama'},
      {value: 5915, label: 'Jimmy Carter'},
      {value: 1919, label: 'Harry Truman'},
      {value: 604, label: 'Calvin Coolidge'},
      {value: 3770, label: 'John Adams'},
    ];

    return (
      <Panel header="Select Patient">
          <Select options={options}/>
      </Panel>
    );
  }
}
