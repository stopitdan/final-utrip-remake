import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';

// Components
import SearchBar from './searchbar';
import Header from './header';
import ProfilePicker from './profile-picker';
import Preferences from './preferences';
import LeafletMap from './map';
import Refine from './refine';
import ProfileSettings from './profile-settings';
import NightlifeTypes from './nightlife-types';
import Footer from './footer';
import DatePicker from './datePicker';
import NavBar from './navbar';


class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Header destination={this.props.destination}/>
                <div className="content">
                    <div className="left-content">
                        <SearchBar updateDestination={this.props.actions.updateDestination}/>
                        <ProfilePicker profileSelected={this.props.actions.profileSelected} profileTitle={this.props.userData.profileTitle}/>
                        <Preferences actions={this.props.actions} userData={this.props.userData}/>
                        <Refine toggleRefinements={this.props.actions.toggleRefinements}/>
                        <ProfileSettings updateProfileSettings={this.props.actions.updateProfileSettings} profileSettings={this.props.userData.profileSettings}/>
                        <NightlifeTypes toggleNightlifeTypes={this.props.actions.toggleNightlifeTypes}/>
                    </div>
                    <div className="right-content">
                        <DatePicker travelDate={this.props.travelDate} term={this.props.destination.city} updateDate={this.props.actions.updateDate}/>
                        <LeafletMap />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

// now were exporting our CONNECTED app, that will get the entirety of state passed to it as props.

export default connect(mapStateToProps, mapDispatchToProps)(App)
