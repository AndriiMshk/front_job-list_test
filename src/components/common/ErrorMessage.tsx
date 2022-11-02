import React, { FC } from 'react';

type ErrorMessagePropsType = {
  message: string
  setError: (error: string) => void
}

export const ErrorMessage: FC<ErrorMessagePropsType> = ({ message, setError }) => {
  return (
    <div
      className="bg-[#EFF0F5] z-40 flex flex-col space-y-4 justify-center items-center w-full h-screen fixed top-0 left-0">
      <div
        className="bg-[#878D9D] z-40 flex flex-col space-y-4 justify-center items-center min-w-[300px] min-h-[150px] rounded-lg shadow-[2px_1px_7px_rgba(0,_0,_0,_0.08),_0px_2px_1px_-1px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.12)] p-4">
        <h3 className="font-bold text-3xl z-40">{message}</h3>
        <div
          onClick={() => {setError('');}}
          className="font-bold hover:cursor-pointer text-2xl z-40">OK
        </div>
      </div>
    </div>
  );
};
