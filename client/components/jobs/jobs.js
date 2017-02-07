import React, {PropTypes} from "react";

import Job from '../job/job'


export default class Jobs extends React.Component {
  render() {
    return (
      <section>
        <div>
          <h4>Active Jobs</h4>
        </div>
        <div>
          <Job title="Job Number One" notes="DO this pllease"/>
        </div>
      </section>
    );
  }
}
