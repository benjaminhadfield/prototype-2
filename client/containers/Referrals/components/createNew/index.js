import React from 'react';
import styles from './styles.css';
import {FormGroup,ControlLabel,FormControl,Button, Col} from 'react-bootstrap';
var data = require('./data.json');

export class CreateNew extends React.Component {
    constructor(props) {
      super(props);
      this.initialState = {
        mdt_meeting: ''
      }
      this.state = this.initialState;
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      console.log('test');
      console.log("before- " + JSON.stringify(data));
      e.preventDefault();
      let {mdt_meeting} = this.state;
      // post to API..
      data["mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_meeting"] = mdt_meeting;
      console.log("after- " + JSON.stringify(data));
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>

            <Col xs={12} smOffset={1} sm={10} className={styles.pad_top_bottom}>

                <h2>Request</h2>

                <FormGroup controlId="mdt_meeting">
                  <ControlLabel>* MDT meeting</ControlLabel>
                  <FormControl  name="mdt_meeting" type="text" placeholder="Identification of the service requested, by name."  />
                </FormGroup>

                <FormGroup controlId="specific_questions_for_mdt">
                  <ControlLabel>Specific questions for MDT</ControlLabel>
                  <FormControl  name="specific_questions_for_mdt" type="text" placeholder="Narrative description of the service requested."  />
                </FormGroup>

                <FormGroup controlId="reason_for_referral">
                  <ControlLabel>Reason for referral</ControlLabel>
                  <FormControl name="reason_for_referral" placeholder="A short phrase describing the reason for the request." componentClass="select" >
                        <option value="Diagnosis and staging">Diagnosis and staging</option>
                        <option value="Management during or following treatment">Management during or following treatment</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="clinical_details">
                  <ControlLabel>Clinical details</ControlLabel>
                  <FormControl  name="clinical_details" type="text" placeholder="Narrative description about the reason for request."  />
                </FormGroup>

                <FormGroup controlId="mdt_review_priority">
                  <ControlLabel>MDT review priority</ControlLabel>
                  <FormControl name="mdt_review_priority" placeholder="Urgency of the request for service." componentClass="select" >
                        <option value="Standard">Standard</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Target 31/62">Target 31/62</option>;
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="specific_date_for_mdt_review">
                  <ControlLabel>Specific date for MDT review</ControlLabel>
                  <FormControl  name="specific_date_for_mdt_review" type="datetime-local" placeholder="The date/time, or acceptable interval of date/time, for provision of the service."  />
                </FormGroup>

                <h2>Cancer MDT referral details</h2>

                <FormGroup controlId="mdt_schedule">
                  <ControlLabel>MDT schedule</ControlLabel>
                  <FormControl name="mdt_schedule" placeholder="Statement about schedule of MDT, whether next available or specific date." componentClass="select" >
                        <option value="at0002">Next available</option>
                        <option value="at0003">Specific date</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="reviews_required">
                  <ControlLabel>MDT schedule</ControlLabel>
                  <FormControl name="reviews_required" placeholder="Description of required reviews." componentClass="select" >
                        <option value="at0006">Histology</option>
                        <option value="at0007">Radiology</option>
                        <option value="at0008">Case discussion only</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="special_mdt_office_instructions">
                  <ControlLabel>Special MDT office instructions</ControlLabel>
                  <FormControl  name="special_mdt_office_instructions" type="text" placeholder="Narrative to provide optional instructions for the MDT office."  />
                </FormGroup>

                <FormGroup controlId="date_symptoms_first_noticed">
                  <ControlLabel>Date symptoms first noticed</ControlLabel>
                  <FormControl  name="date_symptoms_first_noticed" type="datetime-local" placeholder="Date when patient first experienced symptoms."  />
                </FormGroup>

                <h2>Person Name</h2>

                <FormGroup controlId="requested_by">
                  <ControlLabel>Requested by</ControlLabel>
                  <FormControl  name="requested_by" type="text" placeholder="Name in free text unstructured format."  />
                </FormGroup>

                <Button bsStyle="primary" type="submit" children="Submit"/>
            </Col>


        </form>
     )
  }
}
