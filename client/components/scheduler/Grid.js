import React from 'react';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
import Modal from './Modal';
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
			specialtyA: [],
			specialtyB: [],
			specialtyC: [],
			specialtyModalIsOpen: false,
			choiceModalIsOpen: false,
			currentPatient: null,
			day: this.props.day,
			month: this.props.month,
			year: this.props.year
		};
	},

	addPatients: function(patient, specialty){
		switch(specialty){
			case "A":
				this.state.specialtyA.push(patient);
				this.setState({
					specialtyA: this.state.specialtyA

				});
				break;
			case "B":
				this.state.specialtyB.push(patient);
				this.setState({
					specialtyB: this.state.specialtyB

				});
				break;
			case "C":
				this.state.specialtyC.push(patient);
				this.setState({
					specialtyC: this.state.specialtyC

				});
				break;
		}
		this.setState({
			currentPatient: null,
			choiceModalIsOpen: false
		})
	},

	removeFromList: function(index, specialty){
		switch(specialty){
			case "Specialty A":
				var newArray = this.state.specialtyA;
				newArray.splice(index,1);
				if(newArray.length === 0 && this.state.specialtyB.length === 0 && this.state.specialtyC.length === 0){
					this.setState({
						specialtyA: newArray,
						specialtyModalIsOpen: false
					});
				}
				else{
					this.setState({
						specialtyA: newArray
					});
				}
				break;
			case "Specialty B":
				newArray = this.state.specialtyB;
				newArray.splice(index,1);
				if(newArray.length === 0 && this.state.specialtyA.length === 0 && this.state.specialtyC.length === 0){
					this.setState({
						specialtyB: newArray,
						specialtyModalIsOpen: false
					});
				}
				else{
					this.setState({
						specialtyB: newArray
					});
				}
				break;
			case "Specialty C":
				newArray = this.state.specialtyC;
				newArray.splice(index,1);
				if(newArray.length === 0 && this.state.specialtyB.length === 0 && this.state.specialtyA.length === 0){
					this.setState({
						specialtyC: newArray,
						specialtyModalIsOpen: false
					});
				}
				else{
					this.setState({
						specialtyC: newArray
					});
				}
				break;
		}

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
		if(this.state.specialtyA.length === 0 && this.state.specialtyB.length === 0 && this.state.specialtyC.length === 0){
			return (
				<Modal show={this.state.choiceModalIsOpen} onClose={this.choiceToggleModal}>
					<button onClick={()=>this.addPatients(currentPatient, "A")}>Specialty A</button>
					<button onClick={()=>this.addPatients(currentPatient, "B")}>Specialty B</button>
					<button onClick={()=>this.addPatients(currentPatient, "C")}>Specialty C</button>
				</Modal>
			);
		}
		else{
			return (
				<div>

					<button onClick={this.toggleModal}>Click here to view patient</button>
					<Modal show={this.state.specialtyModalIsOpen} onClose={this.toggleModal}>
						<SpecialtyList patients={this.state.specialtyA} specialty="Specialty A" removeFromList={this.removeFromList} addPatient={this.props.addPatient}/>
						<SpecialtyList patients={this.state.specialtyB} specialty="Specialty B" removeFromList={this.removeFromList} addPatient={this.props.addPatient}/>
						<SpecialtyList patients={this.state.specialtyC} specialty="Specialty C" removeFromList={this.removeFromList} addPatient={this.props.addPatient}/>
					</Modal>
					<Modal show={this.state.choiceModalIsOpen} onClose={this.choiceToggleModal}>
						<button onClick={()=>this.addPatients(currentPatient, "A")}>Specialty A</button>
						<button onClick={()=>this.addPatients(currentPatient, "B")}>Specialty B</button>
						<button onClick={()=>this.addPatients(currentPatient, "C")}>Specialty C</button>
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
