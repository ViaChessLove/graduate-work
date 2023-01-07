import React from 'react';
import { useSelector } from 'react-redux';
import { PaginationProps } from '../../types';
import { PaginationItem, PaginationWrapper } from './styles';
import {
  makeSelectCurrentPage,
  makeSelectTotalCount,
} from '../../redux/CoinsSlice/index';

const Pagination = (props: PaginationProps) => {
  const {
    onClick
  } = props;
  
  const totalCount = useSelector(makeSelectTotalCount);

  const currentPage = useSelector(makeSelectCurrentPage);

  const pagination: any[] = [];

  for (let i = 0; i < Math.floor(totalCount/10); i++) {
    pagination.push(i + 1);
  }

  return (
    <PaginationWrapper>
      {pagination.map((page) => {
        const isActive = page === currentPage;

        return (
          <PaginationItem
            key={page}
            isActive={isActive}
            onClick={!isActive && onClick}
          >
            {page}
          </PaginationItem>
        );
      })}
    </PaginationWrapper>
  );
};

export default Pagination;
