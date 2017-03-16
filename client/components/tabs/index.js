import React, {PropTypes} from 'react';
import styles from './styles.css';
import {Tab} from './components/tab';

export const Tabs = ({sections, sectionIndex, ...props}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {sections.map(section => <Tab>{section.title}</Tab>)}
      </div>
      <div className={styles.body}>
        {sections[sectionIndex].body}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  sections: PropTypes.object
}
