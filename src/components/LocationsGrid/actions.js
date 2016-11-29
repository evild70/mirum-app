import * as t from './actionTypes';

export const fetchLocationsGridSuccess = payload => {

    const { data } = payload;

    // taking "locations" object and turning into array
    const locations = Object.keys(data.locations)
        .map(item => ({...data.locations[item], name: item})); // injects "name" (of city) into the object

    // console.log("locations", locations);
    return {
        type: t.FETCH_LOCATIONS_GRID_SUCCESS,
        payload: {
            headline: data.headline,
            locations
        }
    }
}

export const fetchLocationsGridError = error => ({
    type: t.FETCH_LOCATIONS_GRID_ERROR,
    error
})
