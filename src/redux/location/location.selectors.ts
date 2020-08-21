import { createSelector } from 'reselect';

const selectMultiSelect1 = (state: any) => state.multiSelect1;

export const selectMultiSelect1Locations = createSelector(
  [selectMultiSelect1],
  multiSelect1 => multiSelect1.locations
);

export const selectedLocations = createSelector(
  [selectMultiSelect1],
  multiSelect1 => multiSelect1.selectedLocations
);
