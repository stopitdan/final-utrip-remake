import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="links">
                    <a href="https://utrip.com/about/" className="footer-link">About Us</a>
                    <p className="footer-link">|</p>
                    <a href="https://utrip.com/about/contact/" className="footer-link">Contact Us</a>
                    <p className="footer-link">|</p>
                    <a href="https://utrip.com/about/careers/" className="footer-link">Careers</a>
                    <p className="footer-link">|</p>
                    <a href="http://utrippro.com/" className="footer-link">Utrip PRO</a>
                    <p className="footer-link">|</p>
                    <a href="https://utrip.com/about/faq/" className="footer-link">FAQ</a>
                    <p className="footer-link">|</p>
                    <a href="https://utrip.com/about/press/" className="footer-link">Press</a>
                    <p className="footer-link">|</p>
                    <a href="http://blog.utrip.com/" className="footer-link">Blog</a>
                    <p className="footer-link">|</p>
                    <a href="https://utrip.com/terms/" className="footer-link">Terms</a>
                    <p className="footer-link">|</p>
                    <a href="https://utrip.com/privacy/" className="footer-link">Privacy</a>
                        <div className='right-links'>
                            <a href='https://www.facebook.com/Utrippers/' className='right-link'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href='https://twitter.com/utrippers' className='right-link'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href='https://www.pinterest.com/utrip/' className='right-link'><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                            <a href='https://plus.google.com/+utrippers' className='right-link'><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                        </div>
                    <br/>

                        <a href="https://utrip.com/featured-trip/" className="footer-link">Featured Trip Library</a>
                        <p className="footer-link">|</p>
                        <a href="https://utrip.com/experts/" className="footer-link">Local Experts</a>
                        <p className="footer-link">|</p>
                        <a href="https://utrip.com/plan-travel/" className="footer-link">Destinations</a>
                        <p className="footer-link">|</p>
                        <a href="https://utrip.com/personalize/#" className="footer-link">Suggest a Location</a>
                    <p className='copyright'> &#x24B8; 2017 Utrip, Inc. All rights reserved.</p>

                </div>

            </div>
        );
    }
}
