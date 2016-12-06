import t from './actions';

export const LocationState = {
    details: {
        banner_image: '',
        meta: {},
        leadership: [],
        slideshow: []
    },
    work: [],
    hasLoaded: false
}

export const locationReducer = (state = LocationState, action) => {

    switch (action.type) {

        case t.FETCH_LOCATION_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                details: data,
                name: location,
                hasLoaded: true
            }

        case t.FETCH_LOCATION_ERROR:
            return {
                ...state,
                data: {},
                hasLoaded: false
            }

        default:
            return state;

    }
};
