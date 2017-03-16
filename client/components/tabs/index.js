import React, {PropTypes} from 'react';
import styles from './styles.css';
import {Tab} from './components/tab';

export class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionIndex: 0
    }
  }
  render() {
    const {sections} = this.props
    let {sectionIndex} = this.state

    return (
      <div className={styles.container}>
        <div className={styles.tabs}>
          {sections.map((section, i) => <Tab onClick={() => this.setState({sectionIndex: i})} isActive={i === sectionIndex}>{section.title}</Tab>)}
        </div>
        <div className={styles.body}>
          {sections[sectionIndex].body}
        </div>
      </div>
    )
  }
}

Tabs.propTypes = {
  sections: PropTypes.object
}

Tabs.defaultProps = {
  sections: []
}
