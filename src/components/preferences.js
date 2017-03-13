import React, { Component } from 'react';

import PaceSlider from './pace-slider';
import BudgetSlider from './budget-slider';

export default class Preferences extends Component {
    constructor(props) {
        super(props)

        this.handleOnChange = this.handleOnChange.bind(this)

    }

    handleOnChange(v) {
        if(v.target.className === "pref-slider budget-slider") {
            this.props.preferences.budget = v.target.value;
        }
        if(v.target.className === "pref-slider pace-slider") {
            this.props.preferences.pace = v.target.value;
        }

  }

    render() {
        return (
            <div className="preferences">
                <p className="left-content-titles">Adjust your preferences:</p>
                <div className="slider-preferences">
                    <p className="pref-title">Budget</p>
                    <BudgetSlider updateBudget={this.props.actions.updateBudget} val={this.props.userData.budget}/>
                    <div>
                        <p className="pref-footer-left">Backpacker</p>
                        <p className="pref-footer-right">Luxury</p>
                    </div>
                </div>
                <div className="slider-preferences">
                    <p className="pref-title">Pace</p>
                    <PaceSlider updatePace={this.props.actions.updatePace} val={this.props.userData.pace}/>
                    <div>
                        <p className="pref-footer-left">Relaxed</p>
                        <p className="pref-footer-right">Pack it in!</p>
                    </div>
                </div>
                <hr className="refine-hr"/>
            </div>
        );
    }
}
