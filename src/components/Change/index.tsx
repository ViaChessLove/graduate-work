import React from 'react';
import { ChangeProps } from '../../types';
import { setChangeWrapper } from '../../utils/helpers';

const Change = (props: ChangeProps) => {
  const {
    change
  } = props;

  const ChangeWrapper = setChangeWrapper(change);
  return (
    <ChangeWrapper>
      {change}
    </ChangeWrapper>
  )
}

export default Change;
