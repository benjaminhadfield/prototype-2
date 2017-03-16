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
		item.removeFromList(index);
		console.log(item);

		component.setState({
			choiceModalIsOpen: true,
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
			specialtyModalIsOpen: (this.props.dayEvent.specialtyA === 0 && this.props.dayEvent.specialtyB === 0 && this.props.dayEvent.specialtyC === 0),    //false
			choiceModalIsOpen: false,
			currentPatient: null,
			day: this.props.day,
			month: this.props.month,
			year: this.props.year
		};
	},

	addPatientsToGrid: function(patient, specialty,year,month,day){
		this.props.addPatients(patient, specialty,year,month,day);
		this.setState({
			currentPatient: null,
			choiceModalIsOpen: false
		})
	},

	choiceToggleModal: function(){
		this.setState({
			choiceModalIsOpen: !this.state.choiceModalIsOpen
		});
		this.props.addPatient(this.state.currentPatient);
	},

	toggleModal: function(){
		this.setState({
			specialtyModalIsOpen: !this.state.specialtyModalIsOpen
		});
	},

	renderGrid: function(){
		var currentPatient = this.state.currentPatient;
		var dayEvent = this.props.dayEvent;
		if(dayEvent.specialtyA.length === 0 && dayEvent.specialtyB.length === 0 && dayEvent.specialtyC.length === 0){
			this.state.specialtyModalIsOpen = false;
		}

		if(dayEvent.specialtyA.length === 0 && dayEvent.specialtyB.length === 0 && dayEvent.specialtyC.length === 0){
			return (
				<div className={styles.grid_pos}>
					<div className="text-center">{this.props.children}</div>

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
							  <Button className={styles.btn_marg} bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, "A", this.props.year, this.props.month, this.props.day)}>Specialty A</Button>
							  <Button className={styles.btn_marg} bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, "B", this.props.year, this.props.month, this.props.day)}>Specialty B</Button>
							  <Button className={styles.btn_marg} bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, "C", this.props.year, this.props.month, this.props.day)}>Specialty C</Button>
					      </Modal.Body>
					      <Modal.Footer>
					        	<Button onClick={this.choiceToggleModal}>Close</Button>
					      </Modal.Footer>
					</Modal>

				</div>
			);
		}
		else{
			return (
				<div className={styles.grid_pos}>
					<div className="text-center">{this.props.children}</div>
					<Button className={styles.grid_btn} bsStyle="primary" bsSize="xsmall" onClick={this.toggleModal}><i className="fa fa-eye" aria-hidden="true"></i></Button>
					<Modal
					      show={this.state.specialtyModalIsOpen}
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
								<SpecialtyList patients={dayEvent.specialtyA} specialty="A" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
								<SpecialtyList patients={dayEvent.specialtyB} specialty="B" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
								<SpecialtyList patients={dayEvent.specialtyC} specialty="C" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
						</Modal.Body>
					      <Modal.Footer>
					        	<Button className={styles.btn_marg} onClick={this.toggleModal}>Close</Button>
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
							  <Button className={styles.btn_marg} bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, "A", this.props.year, this.props.month, this.props.day)}>Specialty A</Button>
							 <Button className={styles.btn_marg} bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, "B", this.props.year, this.props.month, this.props.day)}>Specialty B</Button>
							 <Button className={styles.btn_marg} bsStyle="primary" onClick={()=>this.addPatientsToGrid(currentPatient, "C", this.props.year, this.props.month, this.props.day)}>Specialty C</Button>
					 	 </Modal.Body>
					      <Modal.Footer>
					        	<Button onClick={this.choiceToggleModal}>Close</Button>
					      </Modal.Footer>
					</Modal>
				</div>
			);
		}
	},

	render: function(){
		var name = this.props.name;
		var age = this.props.age;
		var connectDropTarget = this.props.connectDropTarget;
		var isOver = this.props.isOver;
		return connectDropTarget(
			<div className={styles.cell} data-test="ddddd">
      		{this.renderGrid()}
      		</div>
      	);
	}
});

export default DropTarget(ItemTypes.PATIENT, gridTarget, collect)(Grid);
