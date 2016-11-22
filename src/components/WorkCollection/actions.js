import * as t from './actionTypes';

export const fetchWorkSuccess = payload => {
    // remap the json objects to an array
    const { data } = payload;
    var items;

    if (!data) {
        items = []
    } else {
        items = Object.keys(data).map(item => {
            return {...data[item], key: item}
        })
    }
    return {
        type: t.FETCH_WORK_SUCCESS,
        payload: { items }
    }
}

export const fetchWorkError = error => ({
    type: t.FETCH_WORK_ERROR,
    error
})
