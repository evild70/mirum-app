import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import GlobalFooter from './components/GlobalFooter/GlobalFooter';
import MainNav from './components/MainNav/MainNav';

class App extends Component {
    constructor() {
        super();

        this.state = {
            transitioning: false
        }
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    callFromWork() {
        console.log('callFromWork');
    }

    render() {
        return (
            <div className="app">
                <MainNav />
                <div className="app-content">
                    <CSSTransitionGroup
                        transitionName="appear"
                        component="div"
                        transitionEnterTimeout={200}
                        transitionLeaveTimeout={200}>
                        {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
                    </CSSTransitionGroup>
                    <GlobalFooter />
                </div>
            </div>
        );
    }
}

export default App;
