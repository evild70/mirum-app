import * as t from './actionTypes';

export const fetchCareersSuccess = payload => {
    // remap the json objects to an array
    const { data } = payload;
    const items = Object.keys(data).map(item => {
        return {...data[item], key: item}
    })
    return {
        type: t.FETCH_CAREERS_SUCCESS,
        payload: { items }
    }
}

export const fetchCareersError = error => ({
    type: t.FETCH_CAREERS_ERROR,
    error
})
