import React from 'react';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
//import Modal from './Modal';
import {Modal, Button, ListGroup} from 'react-bootstrap';
import PatientList from './PatientList';
import SpecialtyList from './SpecialtyList';
import styles from './styles.css';

var gridTarget = {
	drop: function(props, monitor, component){
		var item = monitor.getItem();
	  // item = Patient
		var index = item.id;
		if(component.props.dayEvent.meeting.length !== 0){

			item.removeFromList(index);
			component.setState({
				meetingChoiceModalIsOpen: true,
				currentPatient: item
			});
		}
		//Only remove if theres a meeting that day
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
		//map through specialty
		var currentPatient = this.state.currentPatient;
		var dayEvent = this.props.dayEvent;
		var that = this;
//here
		var specialtyListing = function(specialities, interestedMeeting, meetingTitle, removeFromGrid, addPatient, year2, month2, day2){
			var list = specialities.map((specialty, i)=>
				<SpecialtyList patients={specialty["patients"]} meeting={interestedMeeting} specialty={specialty["name"]} removeFromGrid={removeFromGrid} addPatient={addPatient} year={year2} month={month2} day={day2}/>
			);
			return list;
		}
//here
		var specialtyButtonList = function(addPatientsToGrid, currentPatient, currentMeeting, year, month, day){
			var list;
			if(currentMeeting != null && currentMeeting != undefined){
				list = currentMeeting["specialities"].map((specialty, i)=>
					<Button className={styles.btn_marg} bsStyle="primary" onClick={()=>addPatientsToGrid(currentPatient, currentMeeting, specialty["name"], year, month, day)}>{specialty["name"]}</Button>
				);
			}
			return list;
		}


		var fromMeetingToSpecialtyButtons = this.props.dayEvent.meeting.map(function(meet){
			return (
				<Button className={styles.btn_marg} bsStyle="primary" onClick={()=>that.fromMeetingToSpecialty(meet)}>{meet["title"]}</Button>
			);
		});

		var modalMeeting = this.props.dayEvent.meeting.map((meet, i)=>{
			return (
				<div>
				<button className={styles.btn_meeting + " center-block"} onClick={()=>this.toggleModal2(meet)}>{meet["title"].substring(0,8) + "..."}</button>
				<Modal
					show={this.state.specialtyModalIsOpen && this.state.interestedMeeting === meet}
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
					{specialtyListing(meet["specialities"], this.state.interestedMeeting, meet["title"], this.props.removeFromGrid, this.props.addPatient, this.props.year, this.props.month, this.props.day)}
				</Modal.Body>
				<Modal.Footer>
					<Button className={styles.btn_marg} onClick={this.toggleModal}>Close</Button>
				</Modal.Footer>
				</Modal>
				</div>
			);
		});

			return (
				<div>
					{this.props.children}
					<div>
					{modalMeeting}
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
				       {fromMeetingToSpecialtyButtons}
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
					      	{specialtyButtonList(this.addPatientsToGrid, currentPatient, this.state.currentMeeting, this.props.year, this.props.month, this.props.day)}
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
