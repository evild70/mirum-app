import App from './App';
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

export const getRoutes = getState => {
    return {
        path: '/',
        component: App,
        childRoutes: [
            {
                indexRoute: {
                    component: Home
                }
            },
            {
                path: '/work',
                component: Work
            },
            {
                path: '/work/case-study/:caseId',
                component: CaseStudy
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/news',
                component: News
            },
            {
                path: '/capabilities',
                component: Capabilities
            },
            {
                path: '/careers',
                component: Careers
            },
            {
                path: '/contact',
                component: Contact
            },
            {
                path: '/locations',
                component: Locations
            },
            {
                path: '/locations/:locationId',
                component: Location
            }
        ]
    };
};
