import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class NightlifeTypes extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(v) {
        switch(v.target.className) {
            case "this will never hit":
                break;
            default:
                this.props.toggleNightlifeTypes(v.target.className)
                break;
        }
    }

    render() {
        return (
            <div className="nightlife-types">
                <p className="nightlife-title">Nightlife Types</p>
                <div className="checkboxes">
                    <form className="adult-checkbox">
                        <input className="barClubLounge" type='checkbox' onChange={this.handleOnChange} defaultChecked='true'/>
                        <p className="checkbox-label">Bar, Club & Lounge</p>
                    </form>

                    <form className="family-checkbox">
                        <input className="familyFriendlyOnly" type='checkbox' onChange={this.handleOnChange}/>
                        <p className="checkbox-label">Family-friendly Activities Only</p>
                    </form> <br/>
                    <form className="adult-checkbox">
                        <input className="seeTheTown" type='checkbox' onChange={this.handleOnChange} defaultChecked='true'/>
                        <p className="checkbox-label seeTheTown-label">See The Town At Night</p>
                    </form>
                         <br/>
                    <form className="adult-checkbox">
                        <input className="eventsEntertainment" type='checkbox' onChange={this.handleOnChange} defaultChecked='true'/>
                        <p className="checkbox-label">Events & Entertainment</p>
                    </form>



                </div>
            </div>
        )
    }
}
