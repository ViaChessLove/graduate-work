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
  } = props;
  
  return (
    <SelectComponent
      onChange={onChange}
    >
      <SelectOption value="">
        Choose coin
      </SelectOption>
      {coins?.map(({ uuid, name}) => (
        <SelectOption
         key={uuid}
         value={uuid}
        >
          {name}
        </SelectOption>
      ))}
    </SelectComponent>
  );
};

export default Select;
