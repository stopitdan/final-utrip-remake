import React, { Component } from 'react';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = yyyy+'-'+mm+'-'+dd;

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: ''
        }
    }

    handleDepartChange(v) {
        if(today <= v.target.value) {
            this.props.updateDate(v.target.value, this.props.travelDate.endDate)
        }
    }

    handleReturnChange(v) {
        if(v.target.value > this.props.travelDate.startDate && today <= v.target.value || this.props.travelDate.startDate === '' && today <= v.target.value ) {
            this.props.updateDate(this.props.travelDate.startDate, v.target.value)
        }
    
    }

    render() {
        console.log(this.props)
        return (
            <div className="datePicker">
                <p className="left-content-titles date-title">Select your travel dates</p>
                <div className='depart-div'>
                    <input
                        className='depart'
                        placeholder="Depart"
                        type='date'
                        onChange={this.handleDepartChange.bind(this)}
                    />
                </div>
                <div className='return-div'>
                <input
                    className='return'
                    placeholder="Return"
                    type='date'
                    onChange={this.handleReturnChange.bind(this)}
                />
            </div>
            <button className='date-button'>Explore your trip to {this.props.term}</button>
            </div>
        );
    }

}
