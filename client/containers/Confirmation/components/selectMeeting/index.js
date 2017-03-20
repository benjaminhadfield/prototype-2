import React from 'react';
import styles from './styles.css';
import {Panel} from 'react-bootstrap';

export const SelectMeeting = (props) => {
  return (

    <Panel header="Select Meeting">
        <div className={styles.panel_content}>
            Select meeting form...
        </div>
    </Panel>

  )
}
