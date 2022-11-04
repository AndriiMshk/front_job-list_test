import React, { FC } from 'react';
import { ItemType } from '../api/types';
import { Item } from './Item';

type ItemListPropsType = {
  currentData: ItemType[]
  setError: (error: string) => void
  setIsLoading: (isLoading: boolean) => void
}

export const ItemList: FC<ItemListPropsType> = ({ currentData, setError, setIsLoading }) => {

  return (
    <div className="space-y-2 pt-7 max-w-[1140px] container mx-auto">
      {currentData.map(item =>
        <Item
          key={item.id}
          item={item}
          setError={setError}
          setIsLoading={setIsLoading}
        />)}
    </div>
  );
};

