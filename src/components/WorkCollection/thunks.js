import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const fetchWork = (location = false) => dispatch => {
    const ref = location ?
        firebaseDb.ref('work').orderByChild('location').equalTo(location).limitToFirst(6) :
        firebaseDb.ref('work').limitToFirst(6)
    return ref.once('value').then(
        data => dispatch(actions.fetchWorkSuccess({ data: data.val() })),
        error => dispatch(actions.fetchWorkError())
    )
}
