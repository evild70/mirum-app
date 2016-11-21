import { firebaseDb } from './index';
import * as actions from './actions';

// the syntax below is just ES6 shorthand
// It's the same as:
//
// function fetchLatestNews() {
//     return function (dispatch) {
//         ...
//     };
// }

export const fetchLatestNews = () => dispatch => {
    const ref = firebaseDb.ref('news').limitToFirst(3);
    return ref.once('value').then(
        data => dispatch(actions.fetchLatestNewsSuccess( data.val() )),
        error => dispatch(actions.fetchLatestNewsError())
    )
}
