import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const fetchLocationsGrid = () => dispatch => {
    const ref = firebaseDb.ref('locationsgrid');
    return ref.once('value').then(
        data => dispatch(actions.fetchLocationsGridSuccess({
            data: data.val()
        })),
        error => dispatch(actions.fetchLocationsGridError())
    )
}
