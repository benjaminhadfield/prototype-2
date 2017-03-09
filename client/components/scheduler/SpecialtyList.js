import React from 'react';


var SpecialtyList = React.createClass({
	getDefaultProps: function(){
		return {
			patients: []
		};
	},

	addAndRemovePatient: function(patient, index, specialty){ // Removes patient, and adds it to the main patient list again.
		this.props.addPatient(patient);
		this.props.removeFromList(index, specialty);
	},

	render: function(){
		if(this.props.patients.length === 0){
			return (
				<div>
					<h3>{this.props.specialty}</h3>
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
						<button onClick={()=>this.addAndRemovePatient(patient,i,this.props.specialty)}> X </button>
					</div>
				);
			});
			return (
				<div>
					<h3>{this.props.specialty}</h3>
					{patientlisting}
				</div>
			);
		}
	}
});

export default SpecialtyList;