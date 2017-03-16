import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import styles from './styles.css';

var SpecialtyList = React.createClass({
	getDefaultProps: function(){
		return {
			patients: []
		};
	},

	addAndRemovePatient: function(patient, index, specialty, year, month, day){ // Removes patient, and adds it to the main patient list again.
		this.props.addPatient(patient);
		this.props.removeFromGrid(index, specialty, year, month, day);
	},

	render: function(){
		if(this.props.patients.length === 0){
			return (
				<div>
					<h3>Specialty {this.props.specialty}</h3>
					<ListGroup fill>
						<ListGroupItem> None </ListGroupItem>
					</ListGroup>

				</div>
			)
		}
		else
			{
				var patientlisting = this.props.patients.map((patient, i)=>{
				return(
					<div>
						<ListGroupItem>
							<div id={i}>{patient.name}</div>
							<button className={"btn btn-danger btn-xs "+styles.btn_delete_patient} onClick={()=>this.addAndRemovePatient(patient,i,this.props.specialty, this.props.year, this.props.month, this.props.day)}> <i className="fa fa-trash-o" aria-hidden="true"></i> </button>
						</ListGroupItem>
					</div>
				);
			});
			return (
				<div>
					<h3>Specialty {this.props.specialty}</h3>
					<ListGroup fill>
						{patientlisting}
					</ListGroup>

				</div>
			);
		}
	}
});

export default SpecialtyList;
