import React from 'react';


var SpecialtyList = React.createClass({
	getDefaultProps: function(){
		return {
			patients: []
		};
	},

	addAndRemovePatient: function(patient, index, meeting, specialty, year, month, day){ // Removes patient, and adds it to the main patient list again.
		this.props.addPatient(patient);
		this.props.removeFromGrid(index, meeting, specialty, year, month, day);
	},

	render: function(){
		if(this.props.patients.length === 0){
			return (
				<div>
					<h3>Specialty {this.props.specialty}</h3>
					<h3> - </h3>
				</div>
			)
		}
		else 
			{
				var patientlisting = this.props.patients.map((patient, i)=>{
				return(
					<div>
						<li id={i}>{patient.name}</li>
						<button onClick={()=>this.addAndRemovePatient(patient,i,this.props.meeting, this.props.specialty, this.props.year, this.props.month, this.props.day)}> X </button>
					</div>
				);
			});
			return (
				<div>
					<h3>Specialty {this.props.specialty}</h3>
					{patientlisting}
				</div>
			);
		}
	}
});

export default SpecialtyList;