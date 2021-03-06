import App from './App';
import HomePage from './components/HomePage/HomePage';
import WorkPage from './components/WorkPage/WorkPage';
import AboutPage from './components/AboutPage/AboutPage';
import NewsPage from './components/NewsPage/NewsPage';
import CapabilitiesPage from './components/CapabilitiesPage/CapabilitiesPage';
import CareersPage from './components/CareersPage/CareersPage';
import ContactPage from './components/ContactPage/ContactPage';
import LocationsPage from './components/LocationsPage/LocationsPage';
import LocationPage from './components/LocationPage/containers/LocationPage';
import CaseStudyPage from './components/CaseStudyPage/containers/CaseStudyPage';
import StyleguidePage from './components/StyleguidePage/StyleguidePage';

export const getRoutes = getState => {
    return {
        path: '/',
        component: App,
        childRoutes: [
            {
                indexRoute: {
                    component: HomePage
                }
            },
            {
                path: '/work',
                component: WorkPage
            },
            {
                path: '/work/case-study/:caseId',
                component: CaseStudyPage
            },
            {
                path: '/about',
                component: AboutPage
            },
            {
                path: '/news',
                component: NewsPage
            },
            {
                path: '/capabilities',
                component: CapabilitiesPage
            },
            {
                path: '/careers',
                component: CareersPage
            },
            {
                path: '/contact',
                component: ContactPage
            },
            {
                path: '/locations',
                component: LocationsPage
            },
            {
                path: '/locations/:locationId',
                component: LocationPage
            },
            {
                path: '/styleguide',
                component: StyleguidePage
            }
        ]
    };
};
