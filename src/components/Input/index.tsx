import React from 'react';
import { InputComponent } from './styles';
import { InputProps } from '@/types';

const Input = ({
  onChange,
  value,
  placeholder,
}: InputProps) => (
  <InputComponent
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

export default Input;
