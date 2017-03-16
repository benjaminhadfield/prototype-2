import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PatientList from './PatientList';
import Grid from './Grid';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import Calendar from './calendar';
import styles from './calendar.css';
import patients from './patients'

var Scheduler = React.createClass({
  getInitialState: function(){
    return {
      patients:  patients
    };
  },

  removeFromList: function(index){
    var array = this.state.patients;
    array.splice(index,1);
    this.setState({
      patients: array
    });
  },

  addPatient: function(patient){
    this.state.patients.push(patient);
    this.setState({
      patients: this.state.patients
    });
  },

  render: function() {
    return (
      <div className="App">
        <PatientList patients={this.state.patients} name="List of Patients" removeFromList={this.removeFromList}/>
        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <Calendar addPatient={this.addPatient}/>
        </div>
      </div>
    );
  }
});

export default DragDropContext(HTML5Backend)(Scheduler);
