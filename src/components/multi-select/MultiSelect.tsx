import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { createStructuredSelector } from 'reselect';

import Select from '../../elements/select/Select';
import {
  fetchLocationStart,
  addOrRemoveSelectedLocation,
} from '../../redux/location/location.actions';
import {
  selectMultiSelect1Locations,
  selectedLocations,
} from '../../redux/location/location.selectors';

import { useStyles } from './MultiSelectStyles';

const mapState = createStructuredSelector({
  locations: selectMultiSelect1Locations,
  selectedLocations: selectedLocations,
});

const mapDispatch = (dispatch: any) => ({
  fetchLocation: (payload: any) => dispatch(fetchLocationStart(payload)),
  addOrRemoveLocation: (payload: any) =>
    dispatch(addOrRemoveSelectedLocation(payload)),
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const MultiSelect: React.FC<Props> = ({
  locations,
  fetchLocation,
  addOrRemoveLocation,
  selectedLocations,
}) => {
  const classes = useStyles();

  let addedLocations: any = [];
  const onChange = (e: any, action: any) => {
    if (e && e.length > 0) {
      const selected = e.map((el: any) => ({
        name: el.label,
        id: el.value,
      }));
      addedLocations = [...selected];
    }
    addOrRemoveLocation(addedLocations);
  };

  const onInputChange = (ev: any) => {
    console.log(ev);
    if (ev.length >= 3) {
      setTimeout(() => {
        fetchLocation(ev);
      }, 2000);
    }
  };

  return (
    <div className={classes.multiSelect}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.body}>
              <Select
                autoFocus
                label="Select Locations"
                name="locations"
                placeholder="Select Locations"
                value={
                  selectedLocations &&
                  selectedLocations.map((location: any) => {
                    return { label: location.name, value: location.id };
                  })
                }
                isClearable={true}
                isMulti={true}
                onChange={onChange}
                options={
                  locations &&
                  locations.map((location: any) => ({
                    label: location.name,
                    value: location.id,
                  }))
                }
                onInputChange={onInputChange}
              />
            </Grid>
            <Grid item className={classes.body}>
              Select Locations 2
            </Grid>
            <Grid item className={classes.body}>
              Select Locations 3
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.body}>
              Select Locations 4
            </Grid>
            <Grid item className={classes.body}>
              Select Locations 5
            </Grid>
            <Grid item className={classes.body}>
              Select Locations 6
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default connector(MultiSelect);
