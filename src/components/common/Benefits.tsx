import React, { FC } from 'react';

type BenefitsPropsType = { title: string }

export const Benefits: FC<BenefitsPropsType> = ({ title }) => {
  return (
    <div
      className="flex flex-col justify-center items-center border-solid border border-[#FFD41B] rounded-lg bg-[#FFF8D9] w-full sm:w-[222px] h-[50px]">
      <p className="text-[#988B49] font-bold text-base">{title}</p>
    </div>
  );
};

