import React, { FC } from 'react';

type ErrorPagePropsType = {}

export const ErrorPage: FC<ErrorPagePropsType> = ({}) => {
  return (
    <div className="w-full h-screen flex flex-col space-y-4 items-center justify-center bg-backgroundSecondary">
      <h1 className="text-red font-bold text-7xl">Error 404</h1>
      <h4 className="text-5xl">Page not found</h4>
    </div>
  );
};
