import React, {Component} from 'react';

export default class NavBar extends Component {

    constructor(props, context) {
        super(props, context)
    }



    render() {
        return (
            <div>
                <div className='logo-div'>
                    <a className="navbar-brand" href="https://utrip.com/"><i className="fa fa-home home-img" aria-hidden="true"></i></a>
                    <img className='utrip-logo-nav' src={require('../assets/logo.png')}/>
                </div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            {/*collapsed hamburger menu button*/}
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <ul className="nav navbar-nav">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle nav-links" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Destinations</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-locations" href="https://utrip.com/plan-travel/">All Destinations</a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a className="dropdown-locations" href="#">United States <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="dropdown-locations" href="#">Australia <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="dropdown-locations" href="#">Canada <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="dropdown-locations" href="#">Europe <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="dropdown-locations" href="#">Mexico <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="dropdown-locations" href="#">Middle East <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="dropdown-locations" href="#">The Caribbean <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                    
                                </li>
                                <li>
                                    <a className='nav-links' href="#">Local Experts</a>
                                </li>
                                <li>
                                    <a className='nav-links' href="#">Blog</a>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}
