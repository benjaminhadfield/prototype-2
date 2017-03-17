import React from 'react';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
//import Modal from './Modal';
import {Modal, Button} from 'react-bootstrap';
import PatientList from './PatientList';
import SpecialtyList from './SpecialtyList';
import styles from './styles.css';

var gridTarget = {
	drop: function(props, monitor, component){
		var item = monitor.getItem();
	  // item = Patient
		var index = item.id;
		item.removeFromList(index);
		component.setState({
			meetingChoiceModalIsOpen: true,
			currentPatient: item
		});
	}
}

function collect(connect,monitor){
	return{
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}

var Grid = React.createClass({
	getInitialState: function(){
		return{
			specialtyModalIsOpen: false,    //false
			choiceModalIsOpen: false,
			meetingChoiceModalIsOpen: false,
			currentMeeting: null,
			currentPatient: null,
			day: this.props.day,
			month: this.props.month,
			year: this.props.year,
			interestedMeeting: null
		};
	},

	addPatientsToGrid: function(patient, meeting, specialty, year, month, day){
		this.props.addPatients(patient, meeting, specialty, year, month, day);
		this.setState({
			currentPatient: null,
			choiceModalIsOpen: false
		});
	},

	meetingToggleModal: function(){
		this.setState({
			meetingChoiceModalIsOpen: !this.state.meetingChoiceModalIsOpen
		});
		this.props.addPatient(this.state.currentPatient);
	},

	choiceToggleModal: function(){
		this.setState({
			choiceModalIsOpen: !this.state.choiceModalIsOpen
		});
		this.props.addPatient(this.state.currentPatient);
	},

	toggleModal: function(){
		this.setState({
			specialtyModalIsOpen: !this.state.specialtyModalIsOpen,
			interestedMeeting: null
		});
	},

	toggleModal2: function(meeting){
		this.setState({
			specialtyModalIsOpen: true,
			interestedMeeting: meeting
		});
	},

	fromMeetingToSpecialty: function(meeting){
		this.setState({
			currentMeeting: meeting,
			meetingChoiceModalIsOpen: false,
			choiceModalIsOpen: true
		});
	},

	renderGrid: function(){
		function emptyMeeting(meeting){
			if(meeting.specialtyA.length === 0 && meeting.specialtyB.length === 0 && meeting.specialtyC.length === 0){
				return true;
			}
			else return false;
		}
		var currentPatient = this.state.currentPatient;
		var dayEvent = this.props.dayEvent;
		if(emptyMeeting(dayEvent.meetingA) && emptyMeeting(dayEvent.meetingB) && emptyMeeting(dayEvent.meetingC)){
			this.state.specialtyModalIsOpen = false;
		}

			var modalMeetingA;
			var modalMeetingB;
			var modalMeetingC;
		
				if(!emptyMeeting(dayEvent.meetingA)){
					modalMeetingA = (
						<div>
						<button onClick={()=>this.toggleModal2("A")}>Meeting A</button>
						<Modal
					      show={this.state.specialtyModalIsOpen && this.state.interestedMeeting === "A"}
					      onHide={this.toggleModal}
					      container={this}
					      aria-labelledby="contained-modal-title"
					    >
					      <Modal.Header closeButton>
					        	<Modal.Title id="contained-modal-title">
									Patients Assignment
								</Modal.Title>
					      </Modal.Header>
					      <Modal.Body>
								<SpecialtyList patients={dayEvent.meetingA.specialtyA} meeting={this.state.interestedMeeting} specialty="A" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
								<SpecialtyList patients={dayEvent.meetingA.specialtyB} meeting={this.state.interestedMeeting} specialty="B" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
								<SpecialtyList patients={dayEvent.meetingA.specialtyC} meeting={this.state.interestedMeeting} specialty="C" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
						  </Modal.Body>
					      <Modal.Footer>
					        	<Button onClick={this.toggleModal}>Close</Button>
					      </Modal.Footer>
						</Modal>
						</div>
						);
				}
				if(!emptyMeeting(dayEvent.meetingB)){
					modalMeetingB = (
						<div>
						<button onClick={()=>this.toggleModal2("B")}>Meeting B</button>
						<Modal
					      show={this.state.specialtyModalIsOpen && this.state.interestedMeeting === "B"}
					      onHide={this.toggleModal}
					      container={this}
					      aria-labelledby="contained-modal-title"
					    >
					      <Modal.Header closeButton>
					        	<Modal.Title id="contained-modal-title">
									Patients Assignment
								</Modal.Title>
					      </Modal.Header>
					      <Modal.Body>
								<SpecialtyList patients={dayEvent.meetingB.specialtyA} meeting={this.state.interestedMeeting} specialty="A" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
								<SpecialtyList patients={dayEvent.meetingB.specialtyB} meeting={this.state.interestedMeeting} specialty="B" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
								<SpecialtyList patients={dayEvent.meetingB.specialtyC} meeting={this.state.interestedMeeting} specialty="C" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
						  </Modal.Body>
					      <Modal.Footer>
					        	<Button onClick={this.toggleModal}>Close</Button>
					      </Modal.Footer>
						</Modal>
						</div>
						);
				}
				if(!emptyMeeting(dayEvent.meetingC)){
					modalMeetingC = (
						<div>
						<button onClick={()=>this.toggleModal2("C")}>Meeting C</button>
						<Modal
					      show={this.state.specialtyModalIsOpen && this.state.interestedMeeting === "C"}
					      onHide={this.toggleModal}
					      container={this}
					      aria-labelledby="contained-modal-title"
					    >
					      <Modal.Header closeButton>
					        	<Modal.Title id="contained-modal-title">
									Patients Assignment
								</Modal.Title>
					      </Modal.Header>
					      <Modal.Body>
								<SpecialtyList patients={dayEvent.meetingC.specialtyA} meeting={this.state.interestedMeeting} specialty="A" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
								<SpecialtyList patients={dayEvent.meetingC.specialtyB} meeting={this.state.interestedMeeting} specialty="B" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
								<SpecialtyList patients={dayEvent.meetingC.specialtyC} meeting={this.state.interestedMeeting} specialty="C" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
						  </Modal.Body>
					      <Modal.Footer>
					        	<Button onClick={this.toggleModal}>Close</Button>
					      </Modal.Footer>
						</Modal>
						</div>
						);
				}
			

			return (
				<div>
					{this.props.children}
					<div>
					{modalMeetingA}
					{modalMeetingB}
					{modalMeetingC}
					</div>
					<Modal
				      show={this.state.meetingChoiceModalIsOpen}
				      onHide={this.meetingToggleModal}
				      container={this}
				      aria-labelledby="contained-modal-title"
				    >
				      <Modal.Header closeButton>
				        	<Modal.Title id="contained-modal-title">
								Choose Meeting
							</Modal.Title>
				      </Modal.Header>
				      <Modal.Body>
						  <Button bsStyle="primary" onClick={()=>this.fromMeetingToSpecialty("A")}>Meeting A</Button>
						  <Button bsStyle="primary" onClick={()=>this.fromMeetingToSpecialty("B")}>Meeting B</Button>
						  <Button bsStyle="primary" onClick={()=>this.fromMeetingToSpecialty("C")}>Meeting C</Button>
				      </Modal.Body>
				      <Modal.Footer>
				        	<Button onClick={this.meetingToggleModal}>Close</Button>
				      </Modal.Footer>
					</Modal>
					<Modal
					      show={this.state.choiceModalIsOpen}
					      onHide={this.choiceToggleModal}
					      container={this}
					      aria-labelledby="contained-modal-title"
					    >
					      <Modal.Header closeButton>
					        	<Modal.Title id="contained-modal-title">
									Choose Patient
								</Modal.Title>
					      </Modal.Header>
					      <Modal.Body>
							 <Button bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, this.state.currentMeeting, "A", this.props.year, this.props.month, this.props.day)}>Specialty A</Button>
							 <Button bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, this.state.currentMeeting, "B", this.props.year, this.props.month, this.props.day)}>Specialty B</Button>
							 <Button bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, this.state.currentMeeting, "C", this.props.year, this.props.month, this.props.day)}>Specialty C</Button>
					 	 </Modal.Body>
					      <Modal.Footer>
					        	<Button onClick={this.choiceToggleModal}>Close</Button>
					      </Modal.Footer>
					</Modal>
				</div>
			);
	},

	render: function(){
		var name = this.props.name;
		var age = this.props.age;
		var connectDropTarget = this.props.connectDropTarget;
		var isOver = this.props.isOver;
		return connectDropTarget(
			<div className={styles.cell}>
      		{this.renderGrid()}
      		</div>
      	);
	}
});

export default DropTarget(ItemTypes.PATIENT, gridTarget, collect)(Grid);
