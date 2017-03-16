import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import {Tabs} from '../../components/tabs';
import {CreateNew} from './components/createNew';

const sections = [
  {
    title: 'Form',
    body: <CreateNew/>
  }
]

class Referrals extends React.Component {
  render() {
    return (

      <Tabs sections={sections} sectionIndex={0}/>

    );
  }
}

export default connect()(Referrals);
