import * as t from './actionTypes';

export const fetchLocationSuccess = payload => {
    // remap the json objects to an array
    const { data } = payload;
    return {
        type: t.FETCH_LOCATION_SUCCESS,
        payload: { data }
    }
}

export const fetchLocationError = error => ({
    type: t.FETCH_LOCATION_ERROR,
    error
})
