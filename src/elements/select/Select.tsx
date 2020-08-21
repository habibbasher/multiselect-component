import React from 'react';
import ReactSelect from 'react-select';
import { SelectWrapper, Label } from './StyledSelect';
import selectStyles from './SelectStyles';

const Select = ({
  options,
  name = '',
  label,
  onChange,
  defaultValue,
  placeholder,
  onInputChange,
  ...props
}: any) => {
  return (
    <SelectWrapper key={defaultValue?.value}>
      {label && <Label>{`${label}`}</Label>}
      <ReactSelect
        placeholder={placeholder}
        styles={selectStyles}
        name={name}
        options={options}
        onChange={onChange}
        onInputChange={onInputChange}
        onKeyDown={e => {
          e.stopPropagation();
        }}
        {...props}
      />
    </SelectWrapper>
  );
};

export default Select;
