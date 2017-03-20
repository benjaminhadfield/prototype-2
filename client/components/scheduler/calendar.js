/**
 * React Calendar Component v0.1.0
 *
 * Copyright 2016, Dimitar Ivanov
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

import React from 'react';
import Grid from './Grid';
import styles from './calendar.css';

var Calendar = React.createClass({
    calc: function (year, month) {
        if (this.state.selectedElement) {
            if (this.state.selectedMonth != month || this.state.selectedYear != year) {
                this.state.selectedElement.classList.remove('r-selected');
            } else {
                this.state.selectedElement.classList.add('r-selected');
            }
        }
        return {
            firstOfMonth: new Date(year, month, 1),
            daysInMonth: new Date(year, month + 1, 0).getDate()
        };
    },
    componentWillMount: function () {
        this.setState(this.calc.call(null, this.state.year, this.state.month));
    },
    componentDidMount: function () {

    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.props.onSelect && prevState.selectedDt != this.state.selectedDt) {
            this.props.onSelect.call(this.getDOMNode(), this.state);
        }
    },
    getInitialState: function () {
        var date = new Date();
        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            selectedYear: date.getFullYear(),
            selectedMonth: date.getMonth(),
            selectedDate: date.getDate(),
            selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            startDay: 1,
            weekNumbers: false,
            minDate: this.props.minDate ? this.props.minDate : null,
            disablePast: this.props.disablePast ? this.props.disablePast : false,
            dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthNamesFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            firstOfMonth: null,
            daysInMonth: null,
            events: []
        };
    },
    getPrev: function () {
        var state = {};
        if (this.state.month > 0) {
            state.month = this.state.month - 1;
            state.year = this.state.year;
        } else {
            state.month = 11;
            state.year = this.state.year - 1;
        }
        Object.assign(state, this.calc.call(null, state.year, state.month));
        this.setState(state);
    },
    getNext: function () {
        var state = {};
        if (this.state.month < 11) {
            state.month = this.state.month + 1;
            state.year = this.state.year;
        } else {
            state.month = 0;
            state.year = this.state.year + 1;
        }
        Object.assign(state, this.calc.call(null, state.year, state.month));
        this.setState(state);
    },
    selectDate: function (year, month, date, element) {
        if (this.state.selectedElement) {
            this.state.selectedElement.classList.remove('r-selected');
        }
        element.target.classList.add('r-selected');
        this.setState({
            selectedYear: year,
            selectedMonth: month,
            selectedDate: date,
            selectedDt: new Date(year, month, date),
            selectedElement: element.target
        });
    },

    addPatients: function(patient, meeting, specialty, year, month, day){
        var events = this.state.events;
        var found = 0;
        for(var i = 0; i < events.length; i++){
            if(events[i].year === year && events[i].month === month && events[i].day === day){
                switch(meeting){
                    case "A":
                        switch(specialty){
                            case "A":
                                events[i].meetingA.specialtyA.push(patient);
                                break;
                            case "B":
                                events[i].meetingA.specialtyB.push(patient);
                                break;
                            case "C":
                                events[i].meetingA.specialtyC.push(patient);
                                break;
                        }
                        break;
                    case "B":
                        switch(specialty){
                            case "A":
                                events[i].meetingB.specialtyA.push(patient);
                                break;
                            case "B":
                                events[i].meetingB.specialtyB.push(patient);
                                break;
                            case "C":
                                events[i].meetingB.specialtyC.push(patient);
                                break;
                        }
                        break;
                    case "C":
                        switch(specialty){
                            case "A":
                                events[i].meetingC.specialtyA.push(patient);
                                break;
                            case "B":
                                events[i].meetingC.specialtyB.push(patient);
                                break;
                            case "C":
                                events[i].meetingC.specialtyC.push(patient);
                                break;
                        }
                        break;
                }
                found = 1;
            }
        }
        if(found === 0){
            var newEvent = {
                year : year,
                month: month,
                day: day,
                meetingA: {
                    specialtyA: [],
                    specialtyB: [],
                    specialtyC: []
                },
                meetingB: {
                    specialtyA: [],
                    specialtyB: [],
                    specialtyC: []
                },
                meetingC: {
                    specialtyA: [],
                    specialtyB: [],
                    specialtyC: []
                }
            };
            switch(meeting){
                case "A":
                    switch(specialty){
                         case "A":
                            newEvent.meetingA.specialtyA.push(patient);
                            break;
                        case "B":
                            newEvent.meetingA.specialtyB.push(patient);
                            break;
                        case "C":
                            newEvent.meetingA.specialtyC.push(patient);
                            break;
                    }
                    break;
                case "B":
                    switch(specialty){
                         case "A":
                            newEvent.meetingB.specialtyA.push(patient);
                            break;
                        case "B":
                            newEvent.meetingB.specialtyB.push(patient);
                            break;
                        case "C":
                            newEvent.meetingB.specialtyC.push(patient);
                            break;
                    }
                    break;
                case "C":
                    switch(specialty){
                        case "A":
                            newEvent.meetingC.specialtyA.push(patient);
                            break;
                        case "B":
                            newEvent.meetingC.specialtyB.push(patient);
                            break;
                        case "C":
                            newEvent.meetingC.specialtyC.push(patient);
                            break;
                    }
                    break;

            }
            events.push(newEvent);
        }
        this.setState({
            events : events
        })
    },

    removeFromGrid: function(index, meeting, specialty, year, month, day){
        var events = this.state.events;
        for(var i = 0; i < events.length; i++){
            if(events[i].year === year && events[i].month === month && events[i].day === day){
                switch(meeting){
                    case "A":
                        switch(specialty){
                            case "A":
                                events[i].meetingA.specialtyA.splice(index,1);
                                break;
                            case "B":
                                events[i].meetingA.specialtyB.splice(index,1);
                                break;
                            case "C":
                                events[i].meetingA.specialtyC.splice(index,1);
                                break;
                        }
                        break;
                    case "B":
                        switch(specialty){
                            case "A":
                                events[i].meetingB.specialtyA.splice(index,1);
                                break;
                            case "B":
                                events[i].meetingB.specialtyB.splice(index,1);
                                break;
                            case "C":
                                events[i].meetingB.specialtyC.splice(index,1);
                                break;
                        }
                        break;
                    case "C":
                        switch(specialty){
                            case "A":
                                events[i].meetingC.specialtyA.splice(index,1);
                                break;
                            case "B":
                                events[i].meetingC.specialtyB.splice(index,1);
                                break;
                            case "C":
                                events[i].meetingC.specialtyC.splice(index,1);
                                break;
                        }
                        break;
                }
            }
        }
        this.setState({
            events : events
        })
    },

    render: function () {
        return (
            <div className={styles.rcalendar}>
                <div className={styles.rinner}>
                    <Header monthNames={this.state.monthNamesFull} month={this.state.month} year={this.state.year} onPrev={this.getPrev} onNext={this.getNext} />
                    <WeekDays dayNames={this.state.dayNames} startDay={this.state.startDay} weekNumbers={this.state.weekNumbers} />
                    <MonthDates events={this.state.events} removeFromGrid={this.removeFromGrid} addPatients={this.addPatients} addPatient={this.props.addPatient} month={this.state.month} year={this.state.year} daysInMonth={this.state.daysInMonth} firstOfMonth={this.state.firstOfMonth} startDay={this.state.startDay} onSelect={this.selectDate} weekNumbers={this.state.weekNumbers} disablePast={this.state.disablePast} minDate={this.state.minDate} />
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function () {
        return (
            <div className={styles.rrow +" "+ styles.rhead}>
                <div className={styles.rcell +" "+ styles.greyhover} onClick={this.props.onPrev.bind(this)} role="button" tabIndex="0"><i className="fa fa-caret-left" aria-hidden="true"></i></div>
                <div className={styles.rcell +" "+ styles.rtitle}>{this.props.monthNames[this.props.month]}&nbsp;{this.props.year}</div>
                <div className={styles.rcell +" "+ styles.greyhover} onClick={this.props.onNext.bind(this)} role="button" tabIndex="0"><i className="fa fa-caret-right" aria-hidden="true"></i></div>
            </div>
        );
    }
});

var WeekDays = React.createClass({
    render: function () {
        var that = this,
            haystack = Array.apply(null, {length: 7}).map(Number.call, Number);
        return (
            <div className={styles.rrow +" "+ styles.rweekdays}>
                {(() => {
                    if (that.props.weekNumbers) {
                        return (
                            <div className={styles.rcell +" "+ styles.rweeknum}>wn</div>
                        );
                    }
                })()}
                {haystack.map(function (item, i) {
                    return (
                        <div className={styles.rcell}>{that.props.dayNames[(that.props.startDay + i) % 7]}</div>
                    );
                })}
            </div>
        );
    }
});

var MonthDates = React.createClass({
    statics: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        today: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    },

    render: function () {
        var haystack, day, d, current, onClick,
            isDate, className,
            weekStack = Array.apply(null, {length: 7}).map(Number.call, Number),
            that = this,
            startDay = this.props.firstOfMonth.getUTCDay(),
            first = this.props.firstOfMonth.getDay(),
            janOne = new Date(that.props.year, 0, 1),
            rows = 5;

        if ((startDay == 5 && this.props.daysInMonth == 31) || (startDay == 6 && this.props.daysInMonth > 29)) {
            rows = 6;
        }

        className = rows === 6 ? styles.rdates : styles.rdates +" "+ styles.rfix;   // todo:check
        haystack = Array.apply(null, {length: rows}).map(Number.call, Number);
        day = this.props.startDay + 1 - first;
        while (day > 1) {
            day -= 7;
        }
        day -= 1;
        return (
            <div className={className}>
            {haystack.map(function (item, i) {
                d = day + i * 7;
                return (
                    <div className={styles.rrow}>
                    {(() => {
                        if (that.props.weekNumbers) {
                            var wn = Math.ceil((((new Date(that.props.year, that.props.month, d) - janOne) / 86400000) + janOne.getDay() + 1) / 7);
                            return (
                                <div className={styles.rcell +" "+ styles.rweeknum}>{wn}</div>
                            );
                        }
                    })()}
                    {weekStack.map(function (item, i) {
                        d += 1;
                        isDate = d > 0 && d <= that.props.daysInMonth;

                        if (isDate) {
                            current = new Date(that.props.year, that.props.month, d);
                            className = current != that.constructor.today ? styles.rcell +" "+ styles.rdate : styles.rcell +" "+ styles.rdate + " "+styles.rtoday;
                            if (that.props.disablePast && current < that.constructor.today) {
                                className += " " + styles.rpast;
                            } else if (that.props.minDate !== null && current < that.props.minDate) {
                                className += " " + styles.rpast;
                            }

                            var dayEvent = {
                                year : 0,
                                month: 0,
                                day: 0,
                                meetingA: {
                                    specialtyA: [],
                                    specialtyB: [],
                                    specialtyC: []
                                },
                                meetingB: {
                                    specialtyA: [],
                                    specialtyB: [],
                                    specialtyC: []
                                },
                                meetingC: {
                                    specialtyA: [],
                                    specialtyB: [],
                                    specialtyC: []
                                }
                            };
                            var events = that.props.events;
                            for(var i = 0; i < events.length; i++){
                                if(events[i].year === that.props.year && events[i].month === that.props.month && events[i].day === d){
                                    dayEvent = events[i];
                                }
                            }

                            if (/r-past/.test(className)) {
                                return (
                                    <div className={className} role="button" tabIndex="0"><Grid year={that.props.year} month={that.props.month} day={d} addPatient={that.props.addPatient}>{d}</Grid></div>
                                );
                            }

                            return (
                                <div className={className} role="button" tabIndex="0" onClick={that.props.onSelect.bind(that, that.props.year, that.props.month, d)}><Grid dayEvent={dayEvent} removeFromGrid={that.props.removeFromGrid} addPatients={that.props.addPatients} year={that.props.year} month={that.props.month} day={d} addPatient={that.props.addPatient}>{d}</Grid></div>

                            );
                        }

                        return (
                            <div className={styles.rcell}></div>
                        );
                    })}
                    </div>
                );
            })}
            </div>
        );
    }
});



export default Calendar;
