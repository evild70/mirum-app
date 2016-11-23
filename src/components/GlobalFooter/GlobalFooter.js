import React, { Component } from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { fetchGlobalFooterNav } from './thunks';

import footerBkgd from './footer-bkgd.jpg';

export class GlobalFooter extends Component {
    constructor() {
        super();

        this.state = {
            items: {}
        }

        this.renderNav = this.renderNav.bind(this);
    }

    componentWillMount() {
        // const { fetchGlobalFooterNav } = this.props;

        // fetchGlobalFooterNav();

        const items = {
            "nav1":
                {
                    "url": "locations",
                    "text": "Directions"
                },
            "nav2":
                {
                    "url": "/",
                    "text": "Your Privacy"
                },
            "nav3":
                {
                    "url": "news",
                    "text": "News"
                },
            "nav4":
                {
                    "url": "contact",
                    "text": "Connect with Us"
                }
        }

        this.setState({
            items
        });
    }

    renderNav(key) {
        const items = this.state.items[key];
        return (
            <li key={key}>
                <Link to={`/${items.url}`}>{items.text}</Link>
            </li>
        )
    }

    render() {
        const styles = {
            backgroundImage: 'url(' + footerBkgd + ')'
        };

        // const { items } = this.props;

        return (
            <div className="global-footer" style={styles}>
                <div className="gf-container">
                    <div className="gf-logo">
                        <span className="visibly-hidden">Mirum Agency</span>
                        <svg className="icon icon-twitter">
                            <use xlinkHref="#mirum-logo"></use>
                        </svg>
                    </div>
                    <div className="gf-link-container">
                        <div className="gf-social">
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                                      <span className="visibly-hidden">Twitter</span>
                                      <svg className="icon icon-twitter">
                                        <use xlinkHref="#icon-twitter"></use>
                                      </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                      <span className="visibly-hidden">Facebook</span>
                                      <svg className="icon icon-facebook">
                                        <use xlinkHref="#icon-facebook"></use>
                                      </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                      <span className="visibly-hidden">Instagram</span>
                                      <svg className="icon icon-instagram">
                                        <use xlinkHref="#icon-instagram"></use>
                                      </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                      <span className="visibly-hidden">LinkedIn</span>
                                      <svg className="icon icon-linkedin">
                                        <use xlinkHref="#icon-linkedin"></use>
                                      </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="gf-nav">
                            <ul>
                                <li>
                                    © 2016 Mirum All Rights Reserved
                                </li>

                                { Object.keys(this.state.items).map(this.renderNav) }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*
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
*/

// const mapStateToProps = state => ({
//   items: state.navItems
// });

// const mapDispatchToProps = {
//   fetchGlobalFooterNav
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(GlobalFooter);

export default GlobalFooter;
