import * as t from './actionTypes';

export const fetchGlobalFooterSuccess = payload => {

    const { data } = payload;

    return {
        type: t.FETCH_GLOBAL_FOOTER_SUCCESS,
        payload: {
            items: data
        }
    }
}

export const fetchGlobalFooterError = error => ({
    type: t.FETCH_GLOBAL_FOOTER_ERROR,
    error
})
