import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SiguienteSVG from '../../icons/SiguienteSVG.jsx'; // Asegúrate de que esté bien importado

// Corrige el ícono por defecto de Leaflet (necesario para que se vea el marcador)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapView() {
  const posicion = [-12.0661144, -75.2057715]; // Coordenadas de Av. Giráldez 444, Huancayo

  return (
    <div className="w-full">
      <MapContainer
        center={posicion}
        zoom={17}
        scrollWheelZoom={false}
        className="w-full h-[300px] z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={posicion}>
          <Popup>
            Korean Mania Huancayo <br /> Av. Giráldez 444.
          </Popup>
        </Marker>
      </MapContainer>

      <div className="text-center bg-white">
        <a
          href="https://www.google.com/maps/place/Av.+Gir%C3%A1ldez+444,+Huancayo+12001/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-2 flex items-center justify-center bg-rojizo rounded hover:bg-blue-700 text-white"
        >
          <p>Cómo llegar</p>
          <SiguienteSVG />
        </a>
      </div>
    </div>
  );
}

export default MapView;


