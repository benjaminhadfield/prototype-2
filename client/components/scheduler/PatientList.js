import React from 'react';
import Patient from './Patient';

var PatientList = React.createClass({
	getInitialState: function(){
		return {
			patients: this.props.patients
		};
	},

	render: function(){
		var patientlisting = this.state.patients.map((patient, i)=>{
			return(
				<div>
					<Patient name={patient.name} age={patient.age} id={i} removeFromList={this.props.removeFromList}/>
					<button onClick={(event)=>{this.props.removeFromList(i);}}> X </button>
				</div>
			);
		});
		if(this.state.patients.length === 0){
			return (
				<div>
					<h3>{this.props.name}</h3>
					<h3> - </h3>
				</div>
			)
		}
		else return(
			<div>
				<h3>{this.props.name}</h3><br />
				{patientlisting}
			</div>
		);
	}
});

export default PatientList;
