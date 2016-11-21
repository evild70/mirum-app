import React, { Component } from 'react';
import { Link } from 'react-router';

import footerBkgd from './footer-bkgd.jpg';

export class GlobalFooter extends Component {
    render() {
        const styles = {
            backgroundImage: 'url(' + footerBkgd + ')'
        };

        return (
            <div className="global-footer" style={styles}>
                <div className="gf-link-container">
                    <div className="gf-social">
                        <ul>
                            <li>
                                <a href="" className="social-link twitter"></a>
                            </li>
                            <li>
                                <a href="" className="social-link facebook"></a>
                            </li>
                            <li>
                                <a href="" className="social-link instagram"></a>
                            </li>
                            <li>
                                <a href="" className="social-link linkin"></a>
                            </li>
                        </ul>
                    </div>
                    <div className="gf-nav">
                        <ul>
                            <li>
                                © 2016 Mirum All Rights Reserved
                            </li>
                            <li>
                                <Link to="/locations">Directions</Link>
                            </li>
                            <li>
                                <Link to="/">Your privacy</Link>
                            </li>
                            <li>
                                <Link to="/news">News</Link>
                            </li>
                            <li>
                                <Link to="/contact">Connect with Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default GlobalFooter;
