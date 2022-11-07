import React, { useContext, useState } from 'react';
import { ItemList } from './ItemList';
import { Pagination } from './Pagination';
import { ContextType, ItemType } from '../api/types';
import { DataContext } from './App';

export const Items = () => {

  const { data, setError, setIsLoading } = useContext<ContextType>(DataContext);

  const pageCount = data.length / 5;

  const [currentPage, setCurrentPage] = useState(1);

  const currentData: ItemType[] = [];

  data.forEach((el, index) => {index >= currentPage && index < currentPage + 5 && currentData.push(el);});

  return (
    <>
      <ItemList currentData={currentData} setError={setError} setIsLoading={setIsLoading} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount} />
    </>
  );
};
