import React, { FC } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon1 from '../assets/location.png';

type MapComponentPropsType = {
  lat: number
  long: number
}

export const MapComponent: FC<MapComponentPropsType> = ({ lat, long }) => {

  const icon = L.icon({
    iconUrl: icon1,
    iconSize: [30, 38],
  });

  return (
    <div className="rounded-b-lg">
      <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]} icon={icon} />
      </MapContainer>,
    </div>
  );
};
