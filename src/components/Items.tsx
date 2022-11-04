import React, { useContext, useLayoutEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { Pagination } from './Pagination';
import { ContextType, ItemType, PageDataType } from '../api/types';
import { DataContext } from './App';

export const Items = () => {

  const { data, setError, setIsLoading } = useContext<ContextType>(DataContext);

  const [pageData, setPageData] = useState<PageDataType>({
    currentPage: 1,
    pageCount: data.length / 5,
  });

  const currentData: ItemType[] = [];

  data.forEach((el, index) => {
    if (index >= pageData.currentPage && index < pageData.currentPage + 5) {
      currentData.push(el);
    }
  });

  useLayoutEffect(() => {
    setPageData({
      currentPage: 1,
      pageCount: data.length / 5,
    });
  }, [data]);

  return (
    <>
      <ItemList currentData={currentData} setError={setError} setIsLoading={setIsLoading} />
      <Pagination pageData={pageData} setPageData={setPageData} />
    </>
  );
};
