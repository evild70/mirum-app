import * as t from './actionTypes';

export const fetchLatestNewsSuccess = payload => {
    const news = Object.keys(payload).map(item => {
        return {...payload[item], key: item}
    })
    return {
        type: t.FETCH_LATEST_NEWS_SUCCESS,
        payload: news
    }
}

export const fetchLatestNewsError = error => ({
    type: t.FETCH_LATEST_NEWS_ERROR,
    error
})
