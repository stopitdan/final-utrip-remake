import React, {Component} from 'react';
import Range from 'react-range';

export default class BudgetSlider extends Component {

    constructor(props, context) {
        super(props, context)
    }

    handleOnChange(v) {
        this.props.updateBudget(v.target.value)
    }

    render() {
        return (
            <Range
            className="pref-slider"
            onChange={this.handleOnChange.bind(this)}
            type="range"
            step={1}
            value={this.props.val}
            min={0}
            max={9} />
        )
    }
}
