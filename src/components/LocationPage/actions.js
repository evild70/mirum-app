const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'
const FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR'

const locationActions = {
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_ERROR
}

export const fetchLocationSuccess = payload => {
    // remap the json objects to an array
    const { data } = payload;
    return {
        type: FETCH_LOCATION_SUCCESS,
        payload: { data }
    }
}

export const fetchLocationError = error => ({
    type: FETCH_LOCATION_ERROR,
    error
})

export default locationActions;
