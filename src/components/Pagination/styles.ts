import styled from 'styled-components';
import { COLORS } from '@/constants';
import { PaginationItemProps } from '@/types';

export const PaginationItem = styled.div`
  position: relative;

  padding: 1px 2px 1px 3px;

  border-radius: 3px;

  margin-right: 5px;

  margin-bottom: 3px;

  color: ${(props: PaginationItemProps) => props.isActive
    ? COLORS.stegadonScaleGreen
    : COLORS.duckEggBlue
  };

  background-color: ${(props: PaginationItemProps) => props.isActive
    ? COLORS.white
    : COLORS.stegadonScaleGreen
  };

  cursor: pointer;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  font-family: Neucha;

  width: 100%;
  
  padding-left: 20px;
  padding-right: 20px;

  margin-bottom: 20px;
`;