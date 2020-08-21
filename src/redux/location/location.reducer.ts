import { LocationActionTypes } from './location.types';

const INITIAL_STATE = {
  locations: [],
  selectedLocations: [],
};

const fetchLocationSuccess = (state: any, action: any) => {
  return {
    ...state,
    ...action.payload,
  };
};

const handleFailure = (state: any, action: any) => {
  return {
    ...state,
    error: action.payload,
  };
};

const addOrRemoveSelectedLocation = (state: any, action: any) => {
  return {
    ...state,
    selectedLocations: action.payload,
  };
};

const locationReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LocationActionTypes.FETCH_LOCATION_SUCCESS:
      return fetchLocationSuccess(state, action);
    case LocationActionTypes.FETCH_LOCATION_FAILURE:
      return handleFailure(state, action);
    case LocationActionTypes.ADD_SELECTED_LOCATION:
      return addOrRemoveSelectedLocation(state, action);
    default:
      return state;
  }
};

export default locationReducer;
