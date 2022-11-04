import React, { useEffect, useState } from 'react';
import { ContextType, ItemType } from '../api/types';
import { API } from '../api/api';
import { ProjectRoutes } from './common/ProjectRoutes';
import dayjs from 'dayjs';
import { ErrorMessage } from './common/ErrorMessage';
import axios from 'axios';
import { Loading } from './common/Loading';

export const DataContext = React.createContext<ContextType>({} as ContextType);

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ItemType[]>([]);
  const [error, setError] = useState('');


  const getItems = async() => {
    try {
      setIsLoading(true);
      const res = await API.getItems();
      setData(res.data.map(
        el => ({
          ...el,
          rating: Math.floor(Math.random() * 5),
          diffDate: dayjs().diff(dayjs(el.createdAt), 'day'),
        })));
    } catch (e) {
      axios.isAxiosError(e)
        ? e && setError(e.message)
        : setError('Some error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {getItems();}, []);

  return (
    <div className="bg-backgroundSm md:bg-backgroundPrimary w-full flex flex-col items-center text-fontPrimary">
      <DataContext.Provider value={{ data, error, setError, setIsLoading }}>
        <ProjectRoutes />
      </DataContext.Provider>
      {error && <ErrorMessage message={error} setError={setError} />}
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
