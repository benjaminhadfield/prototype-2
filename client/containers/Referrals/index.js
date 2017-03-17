import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import {Tabs,Tab, Col} from 'react-bootstrap';
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

        <Tabs id="controlled-tab-example">
          <Tab eventKey={1} title={<span><i className="fa fa-plus" aria-hidden="true"></i> New Referral </span>}>
                <Col className={styles.tabcontent} xs={12}><CreateNew/></Col>
          </Tab>
          <Tab eventKey={2} title={<span><i className="fa fa-clock-o" aria-hidden="true"></i> Previous Referrals</span>}>
                <Col className={styles.tabcontent} xs={12}><ReviewPrevious/></Col>
          </Tab>
          <Tab eventKey={3} title={<span><i className="fa fa-question-circle" aria-hidden="true"></i> Referral's Tutorial</span>}>
               <Col className={styles.tabcontent} xs={12}>...</Col>
          </Tab>
        </Tabs>

    );
  }
}

export default connect()(Referrals);
