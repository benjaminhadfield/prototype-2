import React from 'react';
import {ItemTypes} from './Constants';
import {DragSource} from 'react-dnd';

var patientSource = {
	beginDrag: function(props){
		return {
			name: props.name,
			age: props.age,
			id: props.id,
			removeFromList: props.removeFromList
		}
	},

	endDrag: function(props,monitor){
		var item = monitor.getItem();
		var dropResult = monitor.getDropResult();
	}

};

function collect(connect, monitor){
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

var Patient = React.createClass({

	getDefaultProps: function(){
		return {
			name: 'John Doe',
			age: 24
		};
	},
	render : function(){
		var connectDragSource = this.props.connectDragSource;
		var isDragging = this.props.isDragging;
		var name = this.props.name;
		var age = this.props.age;
		var id = this.props.id;
		var removeFromList = this.props.removeFromList;

		return connectDragSource(
			<div>
				<li>{this.props.name}</li>
			</div>
		);
	}
});

export default DragSource(ItemTypes.PATIENT, patientSource, collect)(Patient);