import React, { FC, useLayoutEffect, useState } from 'react';
import { ItemType } from '../api/types';
import 'dayjs/locale/zh-cn';
import { API } from '../api/api';
import { Rating } from './common/Rating';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type ItemPropsType = {
  item: ItemType
  setError: (error: string) => void
  setIsLoading: (isLoading: boolean) => void
}

export const Item: FC<ItemPropsType> = ({ item, setError, setIsLoading }) => {

  const navigate = useNavigate();

  const [point, setPoint] = useState('');

  const getPoint = async() => {
    try {
      setIsLoading(true);
      const res = await API.getPoint({ latitude: item.location.lat, longitude: item.location.long });
      res.data.city && res.data.countryName
        ? setPoint(`${res.data.city}, ${res.data.countryName}`)
        : setPoint(`${res.data.locality}`);
    } catch (e) {
      axios.isAxiosError(e)
        ? e && setError(e.message)
        : setError('Some error');
    } finally {
      setIsLoading(false);
    }
  };

  // useLayoutEffect(() => {getPoint();}, []);

  return (
    <div
      className="bg-backgroundSecondary md:bg-white flex py-6 px-4 justify-between rounded-lg shadow-[2px_1px_7px_rgba(0,_0,_0,_0.08),_0px_2px_1px_-1px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.12)] mx-2">
      <div className="flex justify-items-center mt-11 md:mt-0">
        <div style={{ backgroundImage: `url(${item.pictures[0]})` }}
             className="rounded-full w-20 h-20 mr-6 bg-center bg-no-repeat bg-cover" />
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row ">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full">
          <div className="flex flex-col space-y-2 lg:max-w-[712px] md:max-w-[500px] pr-0 md:pr-20">
            <p onClick={() => { navigate(`/detailed/${item.id}`);}}
               className="text-fontPrimary text-xl font-bold hover:cursor-pointer">{item.title}</p>
            <p className="text-fontSecondary text-base font-normal">{item.address}</p>
            <div className="flex justify-items-center items-center space-x-2.5">
              <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
                      fill="#878D9D" />
              </svg>
              <p className="text-fontSecondary text-base font-normal">{point}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4 md:mb-0">
          <div className="w-24 flex justify-items-center items-center">
            <Rating rating={item.rating} />
          </div>
          <div className="flex flex-col justify-between items-end sm:min-w-[180px]">
            <svg className="hidden md:block hover:cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M8 7.3335C8 6.22893 8.89543 5.3335 10 5.3335H22C23.1046 5.3335 24 6.22893 24 7.3335V24.7608C24 25.6353 22.9567 26.0886 22.3175 25.4918L16.6825 20.2304C16.2982 19.8717 15.7018 19.8717 15.3175 20.2304L9.68245 25.4918C9.04328 26.0886 8 25.6353 8 24.7608V7.3335Z"
                    stroke="#70778B" strokeWidth="2" />
            </svg>
            <p className="text-fontSecondary text-xs sm:text-base font-normal">Posted {item.diffDate} days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
