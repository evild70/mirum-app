import * as t from './actionTypes';

export const GlobalFooterState = {
    items: [],
    hasLoaded: false
}

export const globalFooterReducer = (state = GlobalFooterState, action) => {
    switch (action.type) {

        case t.FETCH_GLOBAL_FOOTER_SUCCESS:
            const { items } = action.payload
            return {
                ...state,
                items,
                hasLoaded: true
            }

        case t.FETCH_GLOBAL_FOOTER_ERROR:
            return {
                ...state,
                items: [],
                hasLoaded: false
            }

        default:
            return state;

    }
};
