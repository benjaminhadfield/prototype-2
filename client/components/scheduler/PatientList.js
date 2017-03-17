import React from 'react';
import Patient from './Patient';
import styles from './styles.css';
import {Modal, Button, Panel, ListGroup, ListGroupItem, Col} from 'react-bootstrap';

var PatientList = React.createClass({
	getInitialState: function(){
		return {
			patients: this.props.patients,
			deleteModalIsOpen: false,
			currentIndex: null
		};
	},

	toggleModal: function(index){
		this.setState({
			deleteModalIsOpen: !this.state.deleteModalIsOpen,
			currentIndex: index
		});
	},

	deleteFromModal: function(index){
		this.props.removeFromList(index);
		this.setState({
			deleteModalIsOpen: !this.state.deleteModalIsOpen,
			currentIndex: null
		});
	},

	render: function(){
		var patientlisting = this.state.patients.map((patient, i)=>{
			return(
				<div>
					<ListGroupItem>
						<Patient name={patient.name} age={patient.age} id={i} removeFromList={this.props.removeFromList}/>
						<button className={styles.btn_marg} className={"btn btn-danger btn-xs "+styles.btn_delete_patient} onClick={()=>{this.toggleModal(i)}}> <i className="fa fa-trash-o" aria-hidden="true"></i> </button>
					</ListGroupItem>
				</div>
			);
		});
		if(this.state.patients.length === 0){
			return (
				<div>
					<h3>{this.props.name}</h3>
					<h3> - </h3>
					<Modal
				      show={this.state.deleteModalIsOpen}
				      onHide={this.toggleModal}
				      container={this}
				      aria-labelledby="contained-modal-title"
				    >
				      <Modal.Header closeButton>
				        	<Modal.Title id="contained-modal-title">
								Are you sure you want to delete the patient from the patient list?
							</Modal.Title>
				      </Modal.Header>
				      <Modal.Body>
						  <Button className={styles.btn_marg} bsStyle="danger" onClick={()=>this.deleteFromModal(this.state.currentIndex)}>Yes</Button>
						  <Button className={styles.btn_marg} bsStyle="primary" onClick={()=>this.toggleModal()}>No</Button>
				      </Modal.Body>
				</Modal>
				</div>
			)
		}
		else return(
			<div>

					<Panel className={styles.peach_panel} collapsible defaultExpanded header="Patient list">
						Drag a patient and drop it to the calendar.
						<br/>
						<ListGroup fill>
					    	{patientlisting}
						</ListGroup>
					</Panel>


				<Modal
				      show={this.state.deleteModalIsOpen}
				      onHide={this.toggleModal}
				      container={this}
				      aria-labelledby="contained-modal-title"
				    >
				      <Modal.Header closeButton>
				        	<Modal.Title id="contained-modal-title">
								Are you sure you want to delete the patient from the patient list?
							</Modal.Title>
				      </Modal.Header>
				      <Modal.Body>
						  <Button className={styles.btn_marg} bsStyle="danger" onClick={()=>this.deleteFromModal(this.state.currentIndex)}>Yes</Button>
						  <Button className={styles.btn_marg} bsStyle="primary" onClick={()=>this.toggleModal()}>No</Button>
				      </Modal.Body>
				</Modal>
			</div>
		);
	}
});

export default PatientList;
