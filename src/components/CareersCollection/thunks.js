import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const fetchCareers = (location = false) => dispatch => {
    const ref = location ?
        firebaseDb.ref('careers').orderByChild('location').equalTo(location).limitToFirst(6) :
        firebaseDb.ref('careers').limitToFirst(6)
    return ref.once('value').then(
        data => dispatch(actions.fetchCareersSuccess({ data: data.val() })),
        error => dispatch(actions.fetchCareersError())
    )
}
