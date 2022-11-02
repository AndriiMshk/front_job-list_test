import React, { useContext } from 'react';
import { ContextType } from '../api/types';
import { Item } from './Item';
import { DataContext } from '../App';

export const ItemList = () => {

  const { data, setError, setIsLoading } = useContext<ContextType>(DataContext);

  return (
    <div className="space-y-2 pt-7 max-w-[1140px] container mx-auto">
      {data.map(item => <Item key={item.id} item={item} setError={setError} setIsLoading={setIsLoading} />)}
    </div>
  );
};

