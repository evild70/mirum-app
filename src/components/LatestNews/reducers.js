import * as t from './actionTypes';

export const LatestNewsState = {
    items: [],
    hasLoaded: false
}

export const latestNewsReducer = (state = LatestNewsState, action) => {

    switch (action.type) {

        case t.FETCH_LATEST_NEWS_SUCCESS:
            const { items } = action.payload
            return {
                ...state,
                items,
                hasLoaded: true
            }

        case t.FETCH_LATEST_NEWS_ERROR:
            return {
                ...state,
                items: [],
                hasLoaded: false
            }

        default:
            return state;

    }
};
