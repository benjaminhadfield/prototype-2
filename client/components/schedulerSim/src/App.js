import React, { Component } from 'react';
import './App.css';
import PatientList from './PatientList';
import Grid from './Grid';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import Calendar from './calendar';
import './calendar.css';
import patients from './patients'

var App = React.createClass({
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
        <Calendar addPatient={this.addPatient}/>        
      </div>
    );
  }
});

export default DragDropContext(HTML5Backend)(App);
