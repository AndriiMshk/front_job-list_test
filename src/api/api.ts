import axios from 'axios';
import { ItemType, ParamsType } from './types';
import { GET_POINT_API_KEY, ITEMS_BASE_URL, POINTS_BASE_URL } from './env';

const instanceItems = axios.create({
  baseURL: ITEMS_BASE_URL,
});

const instancePoints = axios.create({
  baseURL: POINTS_BASE_URL,
});

export const API = {
  getItems() {
    return instanceItems.get<ItemType[]>(`/data`,
      { params: { access_token: GET_POINT_API_KEY } });
  },
  getPoint(params: ParamsType) {
    return instancePoints.get('/reverse-geocode-client', { params });
  },
};

