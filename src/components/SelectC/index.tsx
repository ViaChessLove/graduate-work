import React from 'react';

import { SelectProps } from './types';
import {
  SelectComponent,
  SelectOption,
} from './styles';

const Select = (props: SelectProps) => {
  const {
    onChange,
    coins,
    description,
    order,
    currentOption,
  } = props;
  
  return (
    <SelectComponent
      onChange={onChange}
      value={currentOption}
    >
      {description && (
        <SelectOption value="">
          {description}
        </SelectOption>
      )}
      {coins?.map(({ uuid, name }) => (
        <SelectOption
         key={uuid}
         value={uuid}
        >
          {name}
        </SelectOption>
      ))}
      {order?.map(({ type, name }) => (
        <SelectOption
          key={type}
          value={type}
        >
          {name}
        </SelectOption>
      ))}
    </SelectComponent>
  );
};

export default Select;
