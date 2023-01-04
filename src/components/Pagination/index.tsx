import React from 'react';
import { useSelector } from 'react-redux';
import { PaginationProps } from '../../types';
import { PaginationItem, PaginationWrapper } from './styles';
import { makeSelectCurrentPage } from '../../redux/CoinsSlice/index';

const Pagination = (props: PaginationProps) => {
  const {
    totalCount,
  } = props;

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
          >
            {page}
          </PaginationItem>
        );
      })}
    </PaginationWrapper>
  );
};

export default Pagination;
