import React, {Component} from 'react';
import Range from 'react-range';

export default class PaceSlider extends Component {

    constructor(props, context) {
        super(props, context)

    }

    handleOnChange(v) {
        this.props.updatePace(v.target.value)
    }

    render() {
        return (
            <Range
            className="pref-slider"
            onChange={this.handleOnChange.bind(this)}
            type="range"
            value={this.props.val}
            step={1}
            min={0}
            max={9} />
        )
    }
}
