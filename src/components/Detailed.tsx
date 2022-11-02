import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../App';
import { ContextType } from '../api/types';
import { Button } from './common/Button';
import { Employment } from './common/Employment';
import { Benefits } from './common/Benefits';
import { ReturnButton } from './common/ReturnButton';
import { MapComponent } from './MapComponent';
import backgroundCard from '../assets/backgroundCard.png';

export const Detailed = () => {

  const { itemId } = useParams();

  const { data, error } = useContext<ContextType>(DataContext);

  const currentItem = data.find(el => el.id === itemId);

  const description = currentItem?.description
    .replaceAll(/[\t]/gi, '').split('\n')
    .map(el => el.trim())
    .filter(Boolean);

  const benefitsList = description && description[4]
    .split('.')
    .filter(Boolean);

  return (
    <div
      className="flex flex-row flex-wrap py-7 justify-center sm:space-x-10 container mx-0 sm:mx-auto bg-white w-full">
      <div className="flex flex-col max-w-[721px] container px-4">
        <div
          className='flex flex-col md:flex-row w-full justify-between md:items-center space-y-8 md:space-y-0 relative after:w-full after:content-[""] after:absolute after:top-12 after:left-0 after:w-full after:h-px after:bg-[#E5E7EA]'>
          <h3 className="font-bold text-3xl text-fontPrimary">Job Details</h3>
          <div className="flex space-x-9 items-center">
            <div className="flex justify-between items-center space-x-4 hover:cursor-pointer">
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.69847 4.58917C7.42954 2.93067 8.81989 0 9.51609 0C10.5271 -0.001 12.7418 5.686 12.7418 5.686C12.7418 5.686 14.792 5.865 16.449 6.048C17.3287 6.145 18.8994 6.293 18.9977 6.778C19.0188 6.883 18.8924 7.312 18.6627 7.611C17.6898 8.881 15.1652 11.602 15.1652 11.602C15.1652 11.602 15.3036 12.902 15.4269 14.324C15.5062 15.244 15.7198 17.108 15.6426 17.441C15.5583 17.808 15.4069 17.908 15.2494 17.966C14.8382 18.116 13.8833 17.533 12.7679 16.999C11.2483 16.27 9.54117 15.491 9.54117 15.491C9.54117 15.491 8.41476 16.08 7.07973 16.655C5.65343 17.269 4.20906 18.281 3.60624 17.925C3.23011 17.702 3.50895 15.964 3.65338 14.417C3.78879 12.958 3.90615 11.625 3.90615 11.625C3.90615 11.625 3.06962 10.643 2.09568 9.593C1.0435 8.458 -0.239372 7.233 0.0384672 6.783C0.2481 6.443 1.20499 6.261 2.81184 6.062C4.519 5.85 6.22415 5.7 6.22415 5.7C6.22415 5.7 6.40998 5.24364 6.69847 4.58917Z"
                      fill="#38415D" />
              </svg>
              <p className="text-lg text-fontPrimary">Save to my list</p>
            </div>
            <div className="flex justify-between items-center space-x-4 hover:cursor-pointer">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" fillRule="evenodd" clipRule="evenodd"
                      d="M13.04 14.9096L5.91 10.743C5.96 10.512 6 10.2811 6 10.0402C6 9.7992 5.96 9.56827 5.91 9.33735L12.96 5.21084C13.5 5.71285 14.21 6.0241 15 6.0241C16.66 6.0241 18 4.67871 18 3.01205C18 1.34538 16.66 0 15 0C13.34 0 12 1.34538 12 3.01205C12 3.25301 12.04 3.48394 12.09 3.71486L5.04 7.84137C4.5 7.33936 3.79 7.02811 3 7.02811C1.34 7.02811 0 8.37349 0 10.0402C0 11.7068 1.34 13.0522 3 13.0522C3.79 13.0522 4.5 12.741 5.04 12.239L12.16 16.4157C12.11 16.6265 12.08 16.8474 12.08 17.0683C12.08 18.6847 13.39 20 15 20C16.61 20 17.92 18.6847 17.92 17.0683C17.92 15.4518 16.61 14.1365 15 14.1365C14.24 14.1365 13.56 14.4378 13.04 14.9096Z"
                      fill="#38415D" />
              </svg>
              <p className="text-lg text-fontPrimary">Share</p>
            </div>
          </div>
        </div>
        <div className="flex-col mt-10">
          <div className="hidden md:block">
            <Button title="Apply now" />
          </div>
          <div className="flex w-full mt-8">
            <div className="flex flex-col justify-between w-full">
              <h4 className="font-bold text-2xl md:pr-14 w-full">
                {currentItem?.title}
              </h4>
              <div className="flex justify-between items-center mt-1.5 md:mt-0">
                <p className="text-fontSecondary text-base font-normal mt-2">
                  Posted {currentItem?.diffDate} days ago
                </p>
                <div className="md:hidden w-full text-end">
                  <p>Brutto, per year</p>
                  <h6 className="min-w-[161px] font-bold text-xl">€ {currentItem?.salary.replaceAll('k', ' 000')}</h6>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <h6 className="min-w-[161px] font-bold text-xl">€ {currentItem?.salary.replaceAll('k', ' 000')}</h6>
              <p>Brutto, per year</p>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-2">{description && description[0]}</p>
          <h6 className="text-xl mt-8 font-bold">{description && description[1]}</h6>
          <p className="mt-2">{description && description[2]}</p>
          <h6 className="text-xl mt-8 font-bold">{description && description[3]}</h6>
          <ul className="mt-2 list-square pl-5 md:pl-0">
            {benefitsList?.map((el, index) => <li key={index}>{el}</li>)}
          </ul>
        </div>
        <div className="w-full text-center md:text-left mt-8">
          <Button title="Apply now" />
        </div>
        <div className="flex flex-col-reverse md:flex-col">
          <div className="mt-20">
            <div
              className="w-full relative after:w-full after:content-[''] after:absolute after:top-12 after:left-0 after:w-full after:h-px after:bg-[#E5E7EA]">
              <h3 className="font-bold text-3xl text-fontPrimary">Additional info</h3>
            </div>
            <p className="mt-6">Employment type</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-2.5 ">
              {currentItem?.employment_type.map((el, index) => <Employment key={index} title={el} />)}
            </div>
            <p className="mt-6">Benefits</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-2.5 mb-20 md:mb-0">
              {currentItem?.benefits.map((el, index) => <Benefits key={index} title={el} />)}
            </div>
          </div>
          <div className="mt-20">
            <div
              className="w-full relative after:w-full after:content-[''] after:absolute after:top-12 after:left-0 after:w-full after:h-px after:bg-[#E5E7EA]">
              <h3 className="font-bold text-3xl text-fontPrimary">Attached images</h3>
              <div className="flex flex-row space-x-2 items-center justify-around">
                {currentItem?.pictures.map((el, index) =>
                  <img className="max-w-[200px] max-h-[133px] rounded-lg mt-7" key={index} src={el} alt="photo" />,
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative w-full my-20">
          <div className="absolute w-full left-[-30px]">
            <ReturnButton title="RETURN TO JOB BOARD" />
          </div>
        </div>
      </div>
      <div className="m-0">
        <div className="rounded-lg text-[#E7EAF0]">
          <div
            className="flex flex-col space-x-4 py-8 sm:px-16 w-[300px] sm:w-[372px] bg-[#2A3047] rounded-t-lg relative">
            <img className="hidden md:block absolute top-0 left-0 rounded-lg" src={backgroundCard}
                 alt="backgroundCard" />
            <div className="z-10">
              <h6 className="font-bold">{currentItem?.name}</h6>
              <div className="mt-1.5 flex flex-row space-x-1.5">
                <svg className="my-1" width="13" height="19" viewBox="0 0 13 19" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M13 6.35C13 3.11913 10.0899 0.5 6.5 0.5C2.91015 0.5 0 3.11913 0 6.35C0 8.40818 1.97835 12.1977 5.93506 17.7184L6.5 18.5L7.33778 17.3361L7.61735 16.9406C11.2058 11.8403 13 8.31006 13 6.35ZM3.25 6.76087C3.25 5.03198 4.70507 3.63043 6.5 3.63043C8.29493 3.63043 9.75 5.03198 9.75 6.76087C9.75 8.48976 8.29493 9.8913 6.5 9.8913C4.70507 9.8913 3.25 8.48976 3.25 6.76087Z"
                        fill="white" fillOpacity="0.669635" />
                </svg>
                <p>{currentItem?.address}</p>
              </div>
              <p className="text-[#B9BBC2]">{currentItem?.phone}</p>
              <p className="text-[#B9BBC2]">{currentItem?.email}</p>
            </div>
          </div>
          {!error && currentItem && <MapComponent lat={currentItem.location.lat} long={currentItem.location.long} />}
        </div>
      </div>
    </div>
  );
};
