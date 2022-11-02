import React, { FC } from 'react';

type EmploymentPropsType = { title: string }

export const Employment: FC<EmploymentPropsType> = ({ title }) => {
  return (
    <div className='flex flex-col justify-center items-center border-[#A7B0C5] rounded-lg bg-[#E1E6F4] w-full sm:w-[222px] h-[50px]'>
      <p className='text-[#55699E] font-bold text-base'>{title}</p>
    </div>
  );
};

