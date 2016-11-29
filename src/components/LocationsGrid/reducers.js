import * as t from './actionTypes';

export const LocationsGridState = {
    locations: [],
    headline: "",
    hasLoaded: false
}

export const locationsGridReducer = (state = LocationsGridState, action) => {
    switch (action.type) {

        case t.FETCH_LOCATIONS_GRID_SUCCESS:
            const { locations, headline } = action.payload
            return {
                ...state,
                locations,
                headline,
                hasLoaded: true
            }

        case t.FETCH_LOCATIONS_GRID_ERROR:
        default:
            return state;

    }
};
