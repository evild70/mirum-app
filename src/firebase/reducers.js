import * as t from './actionTypes';

export const DataState = {
    latestNews: {
        items: [],
        hasLoaded: false
    }
}

export const dataReducer = (state = DataState, action) => {

    switch (action.type) {

        case t.FETCH_LATEST_NEWS_SUCCESS:
            return {
                ...state,
                latestNews: {
                    items: action.payload,
                    hasLoaded: true
                }
            }

        case t.FETCH_LATEST_NEWS_ERROR:
            return {
                ...state,
                latestNews: {
                    items: [],
                    hasLoaded: false
                }
            }

        default:
            return state;

    }
};
