import * as t from './actionTypes';

export const fetchLatestNewsSuccess = payload => {
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
        type: t.FETCH_LATEST_NEWS_SUCCESS,
        payload: {
            items,
            location
        }
    }

}

export const fetchLatestNewsError = error => ({
    type: t.FETCH_LATEST_NEWS_ERROR,
    error
})
