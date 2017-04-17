import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';
import Notifications, {notify} from 'react-notify-toast';
import {createNewJob} from './actions';
import {CreateJobForm} from './components/createJobForm';
import {SelectMeeting} from './components/selectMeeting';
import {SelectPatient} from './components/selectPatient';
import {isAdminOrAbove} from '../../services/permissions'
import {Col,Modal,Button, Panel,FormControl,FormGroup,InputGroup} from 'react-bootstrap';

class Confirmation extends React.Component {

   getInitialState() {
     return { showModal: false };
   }

   close() {
    this.setState({ showModal: false });
   }

   open() {
    this.setState({ showModal: true });
   }

  constructor(props) {
    super(props);
    this.show = notify.createShowQueue();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)
    this.state = this.getInitialState()
  }

  handleSubmit(data) {
    this.props.createNewJob(data, this.onSuccess, this.onFailure);
  }

  onSuccess() {
    this.show('Job Created!', 'success');
  };

  onFailure() {
    this.show('Error creating job.', 'error');
  }

  render() {
    const {loading, role} = this.props;

    const headerPanel = (
        <div className="row">
            <Col xs={6}> Confirmation </Col>
            <Col xs={6} >
                <div className="pull-right">
                    <Button bsStyle="primary" onClick={this.open.bind(this)} >Add New Job</Button>
                    <Button className="btn-left-mrg" bsStyle="success">Sign Off</Button>
                </div>
            </Col>
        </div>

     )

     const footerText = (
         <FormGroup>
           <InputGroup>
             <FormControl type="text" placeholder="Add a patient note..."/>
             <InputGroup.Button>
              <Button><i className="fa fa-plus" aria-hidden="true"></i></Button>
            </InputGroup.Button>
           </InputGroup>
         </FormGroup>
     )

    return (

      <div>
        {
          // display create form to admins or higher
          isAdminOrAbove(role)
            ? (
                <div>
                    <Col xs={12} mdOffset={2} sm={10} smOffset={1} md={8}>
                        <Panel header={headerPanel} footer={footerText}>
                            <h3>Doctor 1 wrote:</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <h3>Doctor 2 wrote:</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Panel>
                    </Col>
                    <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Job</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <Col xs={12} sm={6}>
                                  <SelectMeeting/>
                                </Col>
                                <Col xs={12} sm={6}>
                                  <SelectPatient/>
                                </Col>
                                <div className={styles.form}>
                                  <CreateJobForm
                                    loading={loading}
                                    submitCallback={this.handleSubmit.bind(this)}/>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            )
            : (
              <div>Please <a href="#">login</a></div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.containers.confirmation.loading,
  role: state.data.user.role
})

const mapDispatchToProps = (dispatch) => ({
  createNewJob: (data, successCallback, failureCallback) => dispatch(createNewJob(data, successCallback, failureCallback))
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
