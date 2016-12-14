import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchGlobalFooterNav } from './thunks';
import MirumLogo from '../svg/MirumLogo';

import footerBkgd from './footer-bkgd.jpg';

export class GlobalFooter extends Component {

    static propTypes = {
        items: PropTypes.array
    }

    constructor() {
        super();

        this.state = {
            items: {}
        }

        this.renderNav = this.renderNav.bind(this);
    }

    componentWillMount() {
        const { fetchGlobalFooterNav } = this.props;

        fetchGlobalFooterNav();
    }

    renderNav(item, index) {
        return (
            <li key={index}>
                <Link to={`/${item.url}`}>{item.text}</Link>
            </li>
        )
    }

    render() {
        const styles = {
            backgroundImage: 'url(' + footerBkgd + ')'
        };

        const { items } = this.props;

        return (
            <div className="global-footer section section--padding" style={styles}>
                <div className="container-reg">
                    <div className="gf-container">
                        <div className="gf-top-container">
                            <div className="gf-logo">
                                <span className="visibly-hidden">Mirum Agency</span>
                                <MirumLogo />
                            </div>
                            <Link to="/" className="bold white">Connect with Us</Link>
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

                                    { items.map(this.renderNav) }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  items: state.globalFooter.items
});

const mapDispatchToProps = {
  fetchGlobalFooterNav
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalFooter);
