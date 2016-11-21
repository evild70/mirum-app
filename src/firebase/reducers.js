import * as t from './actionTypes';

export const DataState = {
    latestNews: []
}

export const dataReducer = (state = DataState, action) => {

    switch (action.type) {

        case t.FETCH_LATEST_NEWS_SUCCESS:
            return {
                ...state,
                latestNews: action.payload
            }

        case t.FETCH_LATEST_NEWS_ERROR:
            return {
                ...state,
                latestNews: null
            }

        default:
            return state;

    }
};
