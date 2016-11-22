import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const fetchLatestGlobalNews = () => dispatch => {
    const ref = firebaseDb.ref('news').limitToFirst(3);
    return ref.once('value').then(
        data => dispatch(actions.fetchLatestNewsSuccess({
            data: data.val(),
            location: 'Global'
        })),
        error => dispatch(actions.fetchLatestNewsError())
    )
}

export const fetchLatestNewsForLocation = location => dispatch => {
    const ref = firebaseDb.ref('news').orderByChild('location').equalTo(location).limitToFirst(3);
    return ref.once('value').then(
        data => dispatch(actions.fetchLatestNewsSuccess({
            data: data.val(),
            location
        })),
        error => dispatch(actions.fetchLatestNewsError())
    )
}
