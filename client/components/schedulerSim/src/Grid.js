import React from 'react';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
import Modal from './Modal';
import PatientList from './PatientList';
import SpecialtyList from './SpecialtyList';

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
				<div>
				{this.props.children}
				<Modal show={this.state.choiceModalIsOpen} onClose={this.choiceToggleModal}>
					<button onClick={()=>this.addPatientsToGrid(currentPatient, "A", this.props.year, this.props.month, this.props.day)}>Specialty A</button>
					<button onClick={()=>this.addPatientsToGrid(currentPatient, "B", this.props.year, this.props.month, this.props.day)}>Specialty B</button>
					<button onClick={()=>this.addPatientsToGrid(currentPatient, "C", this.props.year, this.props.month, this.props.day)}>Specialty C</button>
				</Modal>
				</div>
			);
		}
		else{
			return (
				<div>
					{this.props.children}
					<button onClick={this.toggleModal}>Click here to view patient</button>
					<Modal show={this.state.specialtyModalIsOpen} onClose={this.toggleModal}>
						<SpecialtyList patients={dayEvent.specialtyA} specialty="A" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
						<SpecialtyList patients={dayEvent.specialtyB} specialty="B" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
						<SpecialtyList patients={dayEvent.specialtyC} specialty="C" removeFromGrid={this.props.removeFromGrid} addPatient={this.props.addPatient} year={this.props.year} month={this.props.month} day={this.props.day}/>
					</Modal>
					<Modal show={this.state.choiceModalIsOpen} onClose={this.choiceToggleModal}>
						<button onClick={()=>this.addPatientsToGrid(currentPatient, "A", this.props.year, this.props.month, this.props.day)}>Specialty A</button>
						<button onClick={()=>this.addPatientsToGrid(currentPatient, "B", this.props.year, this.props.month, this.props.day)}>Specialty B</button>
						<button onClick={()=>this.addPatientsToGrid(currentPatient, "C", this.props.year, this.props.month, this.props.day)}>Specialty C</button>
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
			<div style={{
				backgroundColor: 'yellow',
        		height: '100px',
        		width: '100px',
        		float: 'right',
        		
      		}}>
      		{this.renderGrid()}
      		</div>
      	);
	}
});

export default DropTarget(ItemTypes.PATIENT, gridTarget, collect)(Grid);