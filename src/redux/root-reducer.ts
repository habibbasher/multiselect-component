import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import locationReducer from './location/location.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['multiSelect1'],
};

const rootReducer = combineReducers({
  multiSelect1: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
