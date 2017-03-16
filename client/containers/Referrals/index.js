import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import {Tabs} from '../../components/tabs';
import {CreateNew} from './components/createNew';
import {ReviewPrevious} from './components/reviewPrevious';

const sections = [
  {
    title: 'Form',
    body: <CreateNew/>
  },
  {
    title: 'Review Previous',
    body: <ReviewPrevious/>
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
