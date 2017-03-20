import React from 'react';
import styles from './styles.css';
import {Col,FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';

export class CreateJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      title: '',
      comment: '',
      due_date: '',
    }
    this.state = this.initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state)
  }

  validateInput(value) {
    return typeof(value) === 'string' && value.replace(/\s/g, '').length > 0;
  }

  validateForm() {
    return Object.values(this.state).reduce(
      (prev, current) => prev && this.validateInput(current), true
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let {title, comment, due_date} = this.state;
    // deal with invalid form
    if (!this.validateForm()) {
      return;
    }
    // we have a valid form
    const data = {
      Job: {
        title,
        comment,
        due_date,
        assigned_by_id: 2,
        assigned_to_id: 4,
        patient_id: 1440
      }
    }
    this.props.submitCallback(data);
    // reset the form
    this.setState(this.initialState);
  }


  render() {
    const {submitCallback, loading} = this.props;
    let {title, comment, due_date} = this.state;

    return (
      <Col xs={12}>
          <form onSubmit={this.handleSubmit} className={styles.container}>

              <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>
                <FormControl value={title} name="title" type="text" placeholder="Job title goes here..."  onChange={this.handleInputChange} />
              </FormGroup>

              <FormGroup controlId="comment">
                <ControlLabel>Job comment</ControlLabel>
                <FormControl className={styles.vertical_textarea} value={comment} name="comment" componentClass="textarea" placeholder="Job comment goes here..." onChange={this.handleInputChange} />
              </FormGroup>

              <FormGroup controlId="due_date">
                <ControlLabel>Due date</ControlLabel>
                <FormControl value={due_date} name="due_date" type="date"  onChange={this.handleInputChange} />
              </FormGroup>

              <Button bsStyle="primary" disabled={loading || !this.validateForm()} type="submit">
                <i className="fa fa-plus" aria-hidden="true"></i> Create Job
              </Button>
          </form>
     </Col>
    );
  }
};
