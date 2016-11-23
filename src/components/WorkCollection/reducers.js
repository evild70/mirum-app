import * as t from './actionTypes';

export const WorkState = {
    items: [],
    hasLoaded: false
}

export const workReducer = (state = WorkState, action) => {

    switch (action.type) {

        case t.FETCH_WORK_SUCCESS:
            const { items } = action.payload
            return {
                ...state,
                items,
                hasLoaded: true
            }

        case t.FETCH_WORK_ERROR:
            return {
                ...state,
                items: [],
                hasLoaded: false
            }

        default:
            return state;

    }
};
