import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const fetchGlobalFooterNav = () => dispatch => {
    const ref = firebaseDb.ref('globalfooter');
    return ref.once('value').then(
        data => dispatch(actions.fetchGlobalFooterSuccess({
            data: data.val()
        })),
        error => dispatch(actions.fetchGlobalFooterError())
    )
}
