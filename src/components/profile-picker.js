import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';


export default class ProfilePicker extends Component {



    constructor(props) {
        super(props);

       this.handleOnClick = this.handleOnClick.bind(this);

       this.buildYourOwnSrc = require('../assets/build-your-own-bold.png')
       this.firsTimerSrc = require('../assets/first-timer-bold.png')
       this.budgetSrc = require('../assets/budget-bold.png')
       this.returningTravelerSrc = require('../assets/returning-bold.png')
       this.teamPicksSrc = require('../assets/team-picks-bold.png')
       this.luxurySrc = require('../assets/luxury-bold.png')
    }

    handleOnClick(v) {
        v.preventDefault()
        switch(v.target.id) {
            // With real assets I would prefer to do this using css, I feel would be a lot cleaner
            case "buildYourOwn":
                this.props.profileSelected(v.target.id)
                this.buildYourOwnSrc = require('../assets/build-your-own-bold.png')
                this.firsTimerSrc = require('../assets/first-timer-dim.png')
                this.budgetSrc = require('../assets/budget-dim.png')
                this.returningTravelerSrc = require('../assets/returning-dim.png')
                this.teamPicksSrc = require('../assets/team-picks-dim.png')
                this.luxurySrc = require('../assets/luxury-dim.png')
                break;
            case "firstTimer":
                this.props.profileSelected(v.target.id)
                this.buildYourOwnSrc = require('../assets/build-your-own-dim.png')
                this.firsTimerSrc = require('../assets/first-timer-bold.png')
                this.budgetSrc = require('../assets/budget-dim.png')
                this.returningTravelerSrc = require('../assets/returning-dim.png')
                this.teamPicksSrc = require('../assets/team-picks-dim.png')
                this.luxurySrc = require('../assets/luxury-dim.png')
                break;
            case "budget":
                this.props.profileSelected(v.target.id)
                this.buildYourOwnSrc = require('../assets/build-your-own-dim.png')
                this.firsTimerSrc = require('../assets/first-timer-dim.png')
                this.budgetSrc = require('../assets/budget-bold.png')
                this.returningTravelerSrc = require('../assets/returning-dim.png')
                this.teamPicksSrc = require('../assets/team-picks-dim.png')
                this.luxurySrc = require('../assets/luxury-dim.png')
                break;
            case "returningTraveler":
                this.props.profileSelected(v.target.id)
                this.buildYourOwnSrc = require('../assets/build-your-own-dim.png')
                this.firsTimerSrc = require('../assets/first-timer-dim.png')
                this.budgetSrc = require('../assets/budget-dim.png')
                this.returningTravelerSrc = require('../assets/returning-bold.png')
                this.teamPicksSrc = require('../assets/team-picks-dim.png')
                this.luxurySrc = require('../assets/luxury-dim.png')
                break;
            case "teamPicks":
                this.props.profileSelected(v.target.id)
                this.buildYourOwnSrc = require('../assets/build-your-own-dim.png')
                this.firsTimerSrc = require('../assets/first-timer-dim.png')
                this.budgetSrc = require('../assets/budget-dim.png')
                this.returningTravelerSrc = require('../assets/returning-dim.png')
                this.teamPicksSrc = require('../assets/team-picks-bold.png')
                this.luxurySrc = require('../assets/luxury-dim.png')
                break;
            case "luxury":
                this.props.profileSelected(v.target.id)
                this.buildYourOwnSrc = require('../assets/build-your-own-dim.png')
                this.firsTimerSrc = require('../assets/first-timer-dim.png')
                this.budgetSrc = require('../assets/budget-dim.png')
                this.returningTravelerSrc = require('../assets/returning-dim.png')
                this.teamPicksSrc = require('../assets/team-picks-dim.png')
                this.luxurySrc = require('../assets/luxury-bold.png')
                break;
            default:
                break;
        }
    }



    render() {

        return (
            <div className="profile-picker">
                <p className="left-content-titles">Select a traveler profile:</p>

                <a href="/" onClick={this.handleOnClick} ><img id="buildYourOwn" className="profile-icon" src={this.buildYourOwnSrc} /></a>
                <a href="/" onClick={this.handleOnClick} ><img id="firstTimer" className="profile-icon" src={this.firsTimerSrc} /></a>
                <a href="/" onClick={this.handleOnClick} ><img id="budget" className="profile-icon" src={this.budgetSrc} /></a>
                <a href="/" onClick={this.handleOnClick} ><img id="returningTraveler" className="profile-icon" src={this.returningTravelerSrc} /></a>
                <a href="/" onClick={this.handleOnClick} ><img id="teamPicks" className="profile-icon" src={this.teamPicksSrc} /></a>
                <a href="/" onClick={this.handleOnClick} ><img id="luxury" className="profile-icon" src={this.luxurySrc} /></a>
            </div>
        );
    }
}
