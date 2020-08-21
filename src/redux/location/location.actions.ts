import { LocationActionTypes } from './location.types';

export const fetchLocationStart = (payload: any) => ({
  type: LocationActionTypes.FETCH_LOCATION_START,
  payload: payload,
});

export const fetchLocationSuccess = (payload: any) => ({
  type: LocationActionTypes.FETCH_LOCATION_SUCCESS,
  payload: payload,
});

export const fetchLocationFailure = (error: any) => ({
  type: LocationActionTypes.FETCH_LOCATION_FAILURE,
  payload: error,
});

export const addOrRemoveSelectedLocation = (payload: any) => ({
  type: LocationActionTypes.ADD_SELECTED_LOCATION,
  payload: payload,
});
