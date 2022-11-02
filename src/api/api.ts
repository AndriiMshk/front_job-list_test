import axios from 'axios';
import { ItemType, ParamsType } from './types';

const instance = axios.create({
  baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy',
});

export const API = {
  getItems() {
    return instance.get<ItemType[]>(`/data`,
      { params: { access_token: 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu' } });
  },
  getPoint(params: ParamsType) {
    return axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client`, { params });
  },
};



