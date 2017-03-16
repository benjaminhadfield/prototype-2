import React from 'react';
import Patient from './Patient';
import {Modal, Button} from 'react-bootstrap';

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
					<Patient name={patient.name} age={patient.age} id={i} removeFromList={this.props.removeFromList}/>
					<button onClick={()=>{this.toggleModal(i)}}> X </button>
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
						  <Button bsStyle="primary" onClick={()=>this.deleteFromModal(this.state.currentIndex)}>Yes</Button>
						  <Button bsStyle="primary" onClick={()=>this.toggleModal()}>No</Button>
				      </Modal.Body>
				</Modal>
				</div>
			)
		}
		else return(
			<div>
				<h3>{this.props.name}</h3><br />
				{patientlisting}
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
						  <Button bsStyle="primary" onClick={()=>this.deleteFromModal(this.state.currentIndex)}>Yes</Button>
						  <Button bsStyle="primary" onClick={()=>this.toggleModal()}>No</Button>
				      </Modal.Body>
				</Modal>
			</div>
		);
	}
});

export default PatientList;