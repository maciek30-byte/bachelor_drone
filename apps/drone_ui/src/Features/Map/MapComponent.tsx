import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { LatLngExpression } from 'leaflet';

export const MapComponent = () => {
  const center: LatLngExpression = [50.0679, 19.9771];

  return (
    <div className="bg-gray-400 h-full w-full">
      <MapContainer 
        center={center} 
        zoom={15}
        style={{ height: '100%', width: '100%' }} 
        className="leaflet-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};
