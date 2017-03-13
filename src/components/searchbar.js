import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    onInputChange(v) {
        this.setState({
            searchTerm: v.target.value
        })
        this.props.updateDestination(v.target.value)
    }

    render() {
        return (
            <div className="searchbar">
                <input
                    placeholder="Where would you like to go?"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange.bind(this)}
                />

            </div>
        );
    }

}
