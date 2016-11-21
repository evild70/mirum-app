import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { toggleMainNav } from '../../store/actions';
import mainNavBkgd from '../../images/main-nav-bkgd-fpo.jpg';

export class MainNav extends Component {

    static propTypes = {
        children: PropTypes.node,
        toggleMainNav: PropTypes.func,
        mainNavIsOpen: PropTypes.bool
    }

    links = [
        {title: 'Work', path: '/work'},
        {title: 'About', path: '/about'},
        {title: 'News', path: '/news'},
        {title: 'Capabilities', path: '/capabilities'},
        {title: 'Careers', path: '/careers'},
        {title: 'Contact', path: '/contact'}
    ]

    renderNavLinks() {
        return (
            <ul>
                { this.links.map(link => (
                    <li key={link.path}>
                        <Link to={link.path} onClick={this.props.toggleMainNav} activeClassName="active">{link.title}</Link>
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const bkgd = {
            backgroundImage: 'url(' + mainNavBkgd + ')',
            backgroundPosition: '0 0',
            backgroundRepeat: 'no-repeat'
        }

        const { mainNavIsOpen, toggleMainNav } = this.props;

        return (
            <div className={"main-nav " + (mainNavIsOpen ? 'is-open' : '')}>
                <div className="main-nav-button" onClick={toggleMainNav}>
                    <div className="box">
                    </div>
                </div>

                <div className="main-nav-container" style={bkgd}>
                    <div className="main-logo">
                        <IndexLink to="/">
                            <svg className="" viewBox="0 0 562.5 202.4" preserveAspectRatio="xMinYMin meet">
                                <use xlinkHref="#mirum-logo"></use>
                            </svg>
                        </IndexLink>
                    </div>
                    { this.renderNavLinks() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  mainNavIsOpen: state.ui.mainNavIsOpen
});

const mapDispatchToProps = {
  toggleMainNav: toggleMainNav
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);
