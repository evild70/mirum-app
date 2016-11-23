import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const fetchLocation = location => dispatch => {
    const ref = firebaseDb.ref('locations').child(location);
    return ref.once('value').then(
        data => dispatch(actions.fetchLocationSuccess({
            data: data.val(),
            location
        })),
        error => dispatch(actions.fetchLocationError())
    )
}
