import React, { FC } from 'react';

type ButtonPropsType = { title: string }

export const Button: FC<ButtonPropsType> = ({ title }) => {
  return (
    <button className="bg-[#384564] py-4 px-8 text-white font-semibold text-xs rounded-lg">
      {title.toUpperCase()}
    </button>
  );
};
