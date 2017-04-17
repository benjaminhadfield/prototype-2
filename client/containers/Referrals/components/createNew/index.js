/**
 * 1) Add onChange={this.handleChange} and the name from the JSON file to each <FormControl/> element
 * 2) Add the ame name to this.initialState
 * 3) Done!
 */

import React from 'react';
import styles from './styles.css';
import {FormGroup,ControlLabel,FormControl,Button, Col} from 'react-bootstrap';
var data = require('./data.json');
import {connect} from 'react-redux';
import axios from 'axios';

class CreateNew extends React.Component {
    constructor(props) {
      super(props);
      this.initialState = {
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_meeting': '',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/specific_questions_for_mdt':'',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/reason_for_referral':'',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/clinical_details':'',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_review_priority': '',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/specific_date_for_mdt_review': '',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/mdt_schedule|code':'',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/reviews_required:0|code':'',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/special_mdt_office_instructions':'',
        'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/date_symptoms_first_noticed':'',
        'mdt_referral/general/cancer_mdt_-_urology_referral/individual_professional_demographics_uk:0/person_name/requested_by':''
      }
      this.state = this.initialState;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log('POST THIS:', {...data, ...this.state})
      console.log('openEHRSessionId', this.props.openEHRSessionId)

      axios.post(`https://ehrscape.code4health.org//rest/v1/composition?ehrId=64effb89-9b52-4614-8cad-b11a4dad0e5a&templateId=OpenCancer+Urology+MDT+Referral+Form.v0&committerName=uclpeach&format=FLAT`, {...data, ...this.state}, {
        headers: {
          Authorization: 'Basic dWNscGVhY2hfYzRoOlFXeFBwYnl3',
          'EHr-Session-disabled': `sessionId ${this.props.openEHRSessionId}`,
          'Content-Type' : 'application/json'
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))


    }

    render() {
      return (
        <form onSubmit={this.handleSubmit} className={styles.bg_white}>

            <Col xs={12} smOffset={1} sm={10} className={styles.pad_top_bottom}>
                <h2>Request</h2>

                <FormGroup controlId="mdt_meeting">
                  <ControlLabel>* MDT meeting</ControlLabel>
                  <FormControl onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_meeting" type="text" placeholder="Identification of the service requested, by name."  />
                </FormGroup>

                <FormGroup controlId="specific_questions_for_mdt">
                  <ControlLabel>Specific questions for MDT</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/specific_questions_for_mdt" type="text" placeholder="Narrative description of the service requested."  />
                </FormGroup>

                <FormGroup controlId="reason_for_referral">
                  <ControlLabel>Reason for referral</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/reason_for_referral" placeholder="A short phrase describing the reason for the request." componentClass="select" >
                        <option value="Diagnosis and staging">Diagnosis and staging</option>
                        <option value="Management during or following treatment">Management during or following treatment</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="clinical_details">
                  <ControlLabel>Clinical details</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/clinical_details" type="text" placeholder="Narrative description about the reason for request."  />
                </FormGroup>

                <FormGroup controlId="mdt_review_priority">
                  <ControlLabel>MDT review priority</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_review_priority" placeholder="Urgency of the request for service." componentClass="select" >
                        <option value="Standard">Standard</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Target 31/62">Target 31/62</option>;
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="specific_date_for_mdt_review">
                  <ControlLabel>Specific date for MDT review</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/specific_date_for_mdt_review" type="datetime-local" placeholder="The date/time, or acceptable interval of date/time, for provision of the service."  />
                </FormGroup>

                <h2>Cancer MDT referral details</h2>

                <FormGroup controlId="mdt_schedule">
                  <ControlLabel>MDT schedule</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/mdt_schedule|code" placeholder="Statement about schedule of MDT, whether next available or specific date." componentClass="select" >
                        <option value="at0002">Next available</option>
                        <option value="at0003">Specific date</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="reviews_required">
                  <ControlLabel>MDT schedule</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/reviews_required:0|code" placeholder="Description of required reviews." componentClass="select" >
                        <option value="at0006">Histology</option>
                        <option value="at0007">Radiology</option>
                        <option value="at0008">Case discussion only</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="special_mdt_office_instructions">
                  <ControlLabel>Special MDT office instructions</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/special_mdt_office_instructions" type="text" placeholder="Narrative to provide optional instructions for the MDT office."  />
                </FormGroup>

                <FormGroup controlId="date_symptoms_first_noticed">
                  <ControlLabel>Date symptoms first noticed</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/date_symptoms_first_noticed" type="datetime-local" placeholder="Date when patient first experienced symptoms."  />
                </FormGroup>

                <h2>Person Name</h2>

                <FormGroup controlId="requested_by">
                  <ControlLabel>Requested by</ControlLabel>
                  <FormControl  onChange={this.handleChange} name="mdt_referral/general/cancer_mdt_-_urology_referral/individual_professional_demographics_uk:0/person_name/requested_by" type="text" placeholder="Name in free text unstructured format."  />
                </FormGroup>

                <Button bsStyle="primary" type="submit" children="Submit"/>
            </Col>


        </form>
     )
  }
}

const mapStateToProps = (state) => {
  const {openEHRSessionId} = state.data.user
  return {openEHRSessionId}
}

export default connect(mapStateToProps)(CreateNew)
