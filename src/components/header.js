import React, {Component} from 'react';


export default class Header extends Component {

    render(){

        return (
            <div className="header">

                <div className='bottom-header'>
                <h1 className="header-title">Plan your trip to </h1> <h1 className="header-title">&nbsp;&nbsp;{this.props.destination.city}&nbsp;&nbsp;</h1> <br/>

                <a className="header-link" href="#open-modal" ><i className="fa fa-question-circle" aria-hidden="true"></i> How Utrip Personalizes your trip</a>
                </div>

                <hr className="horizontal-break"/>
                    <div id="open-modal" className='modal-dialog'>
                        <div className='modal-div'>
                    		<a href="#close" title="Close" className="close-modal">x</a>
                    		<h2 className='modal-title'>How Utrip Personalizes Your Trip</h2>
                            <hr/>
                    		<p>Utrip is a free travel planning service that brings together the best in artificial intelligence and human experience, making it easy for travelers to create their perfect trip quickly.</p>
                    		<p>Here’s how it works: we start with a vast travel database that has been curated by local area experts. To start planning a trip, a traveler enters their destinations and travel dates. Next they rank their travel preferences in sixteen categories, such as history, food, nightlife and budget. Utrip’s powerful AI algorithm, created by machine learning scientists, sorts through millions of potential combinations of hotels, sites, activities and restaurants.</p>
                            <p>In minutes, Utrip delivers a personalized day-by-day itinerary, complete with maps.</p>
                    	</div>
                    </div>
            </div>


    );
}
}
