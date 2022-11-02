import React, { FC } from 'react';

type PaginationPropsType = {}

export const Pagination: FC<PaginationPropsType> = ({}) => {
  return (
    <div
      className="flex justify-between items-center sm:w-[515px] h-[52px] bg-backgroundSecondary md:bg-white rounded-lg shadow-[2px_1px_7px_rgba(0,_0,_0,_0.08),_0px_2px_1px_-1px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.12)] my-12 px-6">
      <div className="flex justify-between items-center space-x-8">
        <svg className="hover:cursor-pointer" width="12" height="18" viewBox="0 0 12 18" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M10.4974 1.51303C9.67041 0.686035 8.32959 0.686036 7.5026 1.51303L1.51299 7.50264C0.685994 8.32963 0.685994 9.67045 1.51299 10.4974L7.5026 16.4871C8.32959 17.314 9.67041 17.314 10.4974 16.4871C11.3244 15.6601 11.3244 14.3192 10.4974 13.4922L6.00519 9.00004L10.4974 4.50783C11.3244 3.68084 11.3244 2.34002 10.4974 1.51303Z"
                fill="#BEC2CE" />
        </svg>
        <svg width="2" height="32" viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.900781 0.400391V31.6004" stroke="#DEE3EF" strokeWidth="1.3" />
        </svg>
      </div>

      {/*template pagination*/}
      <pre className="text-xl mx-2 font-bold text-[#70778B] tracking-widest hover:cursor-pointer">1 2 3 4 5 ... 18</pre>

      <div className="flex justify-between items-center space-x-8">
        <svg width="2" height="32" viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.900781 0.400391V31.6004" stroke="#DEE3EF" strokeWidth="1.3" />
        </svg>
        <svg className="hover:cursor-pointer" width="12" height="18" viewBox="0 0 12 18" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M1.5026 1.51303C2.32959 0.686035 3.67041 0.686036 4.4974 1.51303L10.487 7.50264C11.314 8.32963 11.314 9.67045 10.487 10.4974L4.4974 16.4871C3.67041 17.314 2.32959 17.314 1.5026 16.4871C0.675605 15.6601 0.675607 14.3192 1.5026 13.4922L5.99481 9.00004L1.5026 4.50783C0.675604 3.68084 0.675605 2.34002 1.5026 1.51303Z"
                fill="#BEC2CE" />
        </svg>
      </div>
    </div>
  );
};
