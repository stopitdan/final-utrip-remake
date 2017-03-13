import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Refine extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(v) {
        switch(v.target.className) {
            case 'refine-button':
                v.target.className = 'refine-button-selected';
                break;
            default:
                v.target.className = 'refine-button';
                break;
        }
        switch(v.target.id) {
            case "never gonna hit":
                break;
            default:
                this.props.toggleRefinements(v.target.id)
                break;
        }
    }

    render() {

        return (
            <div className="refine">
                <p className="left-content-titles">Refine your search</p>
                <div className="refine-button-div">
                    <button onClick={this.handleOnClick} id="liveMusic" className="refine-button">LIVE MUSIC</button>
                    <button onClick={this.handleOnClick} id="familyFriendly" className="refine-button">FAMILY FRIENDLY</button>
                    <button onClick={this.handleOnClick} id="vegetarian" className="refine-button">VEGETARIAN</button>
                    <button onClick={this.handleOnClick} id="tours" className="refine-button">TOURS</button>
                    <button onClick={this.handleOnClick} id="cheapEats" className="refine-button">CHEAP EATS</button>
                    <button onClick={this.handleOnClick} id="foodie" className="refine-button">FOODIE</button>
                    <button onClick={this.handleOnClick} id="romantic" className="refine-button">ROMANTIC</button>
                </div>
                <hr className="refine-hr"/>
            </div>
        );
    }
}
