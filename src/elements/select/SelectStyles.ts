const selectStyles = {
  container: (provided: any) => ({
    ...provided,
    width: '100%',
    minWidth: '150px',
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: '#EFF1F4',
    fontFamily: 'Roboto',
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: 0,
    minHeight: '39px',
    border: 'none',
    boxShadow: 'none',
  }),
  indicatorSeparator: () => ({
    backgroundColor: 'transparent',
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    backgroundColor: '#EFF1F4',
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: '#EFF1F4',
    alignItems: 'center',
    borderRadius: 0,
    border: 'none',
    paddingLeft: '8px',
    div: {
      fontSize: '14px',
      fontFamily: 'Roboto',
      color: '#353535',
    },
  }),
};

export default selectStyles;
