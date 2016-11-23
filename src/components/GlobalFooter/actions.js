import * as t from './actionTypes';

export const fetchGlobalFooterSuccess = payload => {
    // remap the json objects to an array
    const { data } = payload;
    const items = Object.keys(data).map(item => {
        return {...data[item], key: item}
    })
    return {
        type: t.FETCH_GLOBAL_FOOTER_SUCCESS,
        payload: {
            items
        }
    }
}

export const fetchGlobalFooterError = error => ({
    type: t.FETCH_GLOBAL_FOOTER_ERROR,
    error
})
