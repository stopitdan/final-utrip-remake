import React, {Component} from 'react';
import Range from 'react-range';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export default class ProfileSettings extends Component {
    constructor(props) {
        super(props);

    }

    handleOnChange(v) {
        switch (v.target.className) {
            case 'slide-1':
                switch(v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "I'm a Trailblazer", 'mustsee');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Only the Best", 'mustsee');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Must See Some", 'mustsee');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Must See Most", 'mustsee');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "See them All", 'mustsee');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-2':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "What's a Bidet", 'culture');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Less is More", 'culture');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "When in Rome...", 'culture');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Culture Connoisseur", 'culture');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Local Immersion", 'culture');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-3':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Whatever's Convenient", 'cuisine');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Food is Food", 'cuisine');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Like to Eat", 'cuisine');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Important to Me", 'cuisine');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Major Foodie", 'cuisine');
                        break;
                    default:
                        break;
                };
                break;
            case 'slide-4':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Kiddie Pool Fun", 'adventure');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Safety First", 'adventure');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Try Anything Once", 'adventure');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Want Thrills", 'adventure');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Adernaline Junkie", 'adventure');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-5':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Not a Priority", 'art');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Limited Interest", 'art');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Art's Pretty Cool", 'art');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Important to Me", 'art');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Art Lover", 'art');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-6':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Not a Priority", 'entertainment');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Only the Best", 'entertainment');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "I'm into Fun", 'entertainment');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Let's Have Fun", 'entertainment');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Here to Play", 'entertainment');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-7':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Not a Priority", 'hist');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Limited Interest", 'hist');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "History's Cool", 'hist');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Important to Me", 'hist');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "History Buffl", 'hist');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-8':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Not a Priority", 'museums');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Only the Best", 'museums');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Enjoy Museums", 'museums');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Important to Me", 'museums');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "See them All", 'museums');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-9':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Mostly Urban Trip", 'nature');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Limited Interest", 'nature');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Like the Outdoors", 'nature');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Need Fresh Air", 'nature');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Into the Wild", 'nature');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-10':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Not a Priority", 'rr');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Limited Interest", 'rr');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Rest is Good", 'rr');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Like Tea Time", 'rr');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Pure Relaxation", 'rr');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-11':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "No Thanks", 'shopping');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Souvenirs & Gifts", 'shopping');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Like Shopping", 'shopping');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Love Shopping", 'shopping');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Total Shopaholic", 'shopping');
                        break;
                    default:
                        break;
                };
                break;

            case 'slide-12':
                switch (v.target.value) {
                    case "0":
                    case "1":
                        this.props.updateProfileSettings(v.target.value, "Balls are Scary", 'sports');
                        break;
                    case "2":
                    case "3":
                        this.props.updateProfileSettings(v.target.value, "Limited Interest", 'sports');
                        break;
                    case "4":
                    case "5":
                        this.props.updateProfileSettings(v.target.value, "Like Sports", 'sports');
                        break;
                    case "6":
                    case "7":
                        this.props.updateProfileSettings(v.target.value, "Let's Play", 'sports');
                        break;
                    case "8":
                    case "9":
                        this.props.updateProfileSettings(v.target.value, "Live for Sports!", 'sports');
                        break;
                    default:
                        break;
                };
                break;
            default:
                break;

        }

    }

    render() {
        return (

            <div className="your-profile">

                <p className="traveler-profile-title">Your Traveler Profile</p>
                <div className='row-grey'>
                    <div className='slide-div'>
                        <p className='slide-1-color profile-category-title'><i className="fa fa-certificate" aria-hidden="true"></i> Must See</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.mustsee.val} step={1} min={0} max={9} className='slide-1'/>
                        <p className='slide-1-color profile-category-message'>{this.props.profileSettings.mustsee.message}</p>
                    </div>
                    <div className='slide-div'>
                        <p className='slide-2-color profile-category-title'><i className="fa fa-map-marker" aria-hidden="true"></i> Culture</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.culture.val} step={1} min={0} max={9} className='slide-2'/>
                        <p className='slide-2-color profile-category-message'>{this.props.profileSettings.culture.message}</p>
                    </div>
                    <div className='slide-div'>
                        <p className='slide-3-color profile-category-title'><i className="fa fa-cutlery" aria-hidden="true"></i> Cuisine</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.cuisine.val} step={1} min={0} max={9} className='slide-3'/>
                        <p className='slide-3-color profile-category-message'>{this.props.profileSettings.cuisine.message}</p>
                    </div>
                </div>
                <div className='row-white'>
                    <div className='slide-div'>
                        <p className='slide-4-color profile-category-title'><i className="fa fa-heartbeat" aria-hidden="true"></i> Adventure</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.adventure.val} step={1} min={0} max={9} className='slide-4'/>
                        <p className='slide-4-color profile-category-message'>{this.props.profileSettings.adventure.message}</p>
                    </div>
                    <div className='slide-div'>
                        <p className='slide-5-color profile-category-title'><i className="fa fa-paint-brush" aria-hidden="true"></i> Art</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.art.val} step={1} min={0} max={9} className='slide-5'/>
                        <p className='slide-5-color profile-category-message'>{this.props.profileSettings.art.message}</p>
                    </div>
                    <div className='slide-div'>
                        <p className='slide-6-color profile-category-title'><i className="fa fa-video-camera" aria-hidden="true"></i> Entertainment</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.entertainment.val} step={1} min={0} max={9} className='slide-6'/>
                        <p className='slide-6-color profile-category-message'>{this.props.profileSettings.entertainment.message}</p>
                    </div>
                </div>
                <div className='row-grey'>
                    <div className='slide-div'>
                        <p className='slide-7-color profile-category-title'><i className="fa fa-book" aria-hidden="true"></i> History</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.hist.val} step={1} min={0} max={9} className='slide-7'/>
                        <p className='slide-7-color profile-category-message'>{this.props.profileSettings.hist.message}</p>
                    </div>
                    <div className='slide-div'>
                        <p className='slide-8-color profile-category-title'><i className="fa fa-building" aria-hidden="true"></i> Museums</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.museums.val} step={1} min={0} max={9} className='slide-8'/>
                        <p className='slide-8-color profile-category-message'>{this.props.profileSettings.museums.message}</p>
                    </div>
                    <div className='slide-div'>
                        <p className='slide-9-color profile-category-title'><i className="fa fa-leaf" aria-hidden="true"></i> Nature</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.nature.val} step={1} min={0} max={9} className='slide-9'/>
                        <p className='slide-9-color profile-category-message'>{this.props.profileSettings.nature.message}</p>
                    </div>
                </div>
                <div className='row-white'>
                    <div className='slide-div'>
                        <p className='slide-10-color profile-category-title'><i className="fa fa-bed" aria-hidden="true"></i> R & R</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.rr.val} step={1} min={0} max={9} className='slide-10'/>
                        <p className='slide-10-color profile-category-message'>{this.props.profileSettings.rr.message}</p>
                    </div>
                    <div className='slide-div'>
                        <p className='slide-11-color profile-category-title'><i className="fa fa-shopping-bag" aria-hidden="true"></i> Shopping</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.shopping.val} step={1} min={0} max={9} className='slide-11'/>
                        <p className='slide-11-color profile-category-message'>{this.props.profileSettings.shopping.message}</p>
                    </div>
                    <div className='slide-div'>
                        <p className='slide-12-color profile-category-title'><i className="fa fa-futbol-o" aria-hidden="true"></i> Sports</p>
                        <Range type="range" onInput={this.handleOnChange.bind(this)} value={this.props.profileSettings.sports.val} step={1} min={0} max={9} className='slide-12'/>
                        <p className='slide-12-color profile-category-message'>{this.props.profileSettings.sports.message}</p>
                    </div>
                </div>
            </div>
        )
    }
}
