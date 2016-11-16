import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles/main.css';
import { configureStore } from './store';
import Root from './root';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');


function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    rootElement
  );
}

const Root = () => {
    return (
        <Router history={browserHistory}>

            <Route path="/" component={App}>
                <IndexRoute component={Home} />

                <Route path="/work" component={Work} />
                <Route path="/work/case-study/:caseId" component={CaseStudy} />

                <Route path="/about" component={About}/>
                <Route path="/news" component={News}/>
                <Route path="/news/:storyId" component={News} />
                <Route path="/capabilities" component={Capabilities}/>
                <Route path="/careers" component={Careers}/>
                <Route path="/contact" component={Contact}/>

                <Route path="/locations" component={Locations} />
                <Route path="/locations/:locationId" component={Location} />
            </Route>

        </Router>
    )

if (module.hot) {
  module.hot.accept('./root', () => {
    render(require('./root').default);
  });

}

render(Root)
