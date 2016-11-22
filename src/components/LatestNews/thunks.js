import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const fetchLatestNews = (location = false) => dispatch => {
    const ref = location ?
        firebaseDb.ref('news').orderByChild('location').equalTo(location).limitToFirst(3) :
        firebaseDb.ref('news').limitToFirst(6)
    return ref.once('value').then(
        data => dispatch(actions.fetchLatestNewsSuccess({ data: data.val() })),
        error => dispatch(actions.fetchLatestNewsError())
    )
}
