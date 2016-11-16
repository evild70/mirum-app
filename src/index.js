import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import About from './components/About/About';
import News from './components/News/News';
import Capabilities from './components/Capabilities/Capabilities';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import Locations from './components/Locations/Locations';
import Location from './components/Location/Location';
import CaseStudy from './components/CaseStudy/CaseStudy';

import './styles/main.css';

const Root = () => {
    return (
        <Router history={browserHistory}>

            <Route path="/" component={App}>
                <IndexRoute component={Home} />

                <Route path="/work" component={Work} />
                <Route path="/work/case-study/:caseId" component={CaseStudy} />

                <Route path="/about" component={About}/>
                <Route path="/news" component={News}/>
                <Route path="/capabilities" component={Capabilities}/>
                <Route path="/careers" component={Careers}/>
                <Route path="/contact" component={Contact}/>

                <Route path="/locations" component={Locations} />
                <Route path="/locations/:locationId" component={Location} />
            </Route>

        </Router>
    )
}

render(
  <Root />,
  document.getElementById('root')
);
