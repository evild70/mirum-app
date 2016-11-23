import * as t from './actionTypes';

export const CareersState = {
    items: [],
    hasLoaded: false
}

export const careersReducer = (state = CareersState, action) => {

    switch (action.type) {

        case t.FETCH_CAREERS_SUCCESS:
            const { items } = action.payload
            return {
                ...state,
                items,
                hasLoaded: true
            }

        case t.FETCH_CAREERS_ERROR:
            return {
                ...state,
                items: [],
                hasLoaded: false
            }

        default:
            return state;

    }
};
