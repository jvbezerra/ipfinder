import { MapContainer, Marker,Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { LatLngExpression } from 'leaflet'

const Map: React.FC<{ coordinates: LatLngExpression }> = ({ coordinates }) => {
  return (
    <MapContainer
      center={coordinates} zoom={16}
      scrollWheelZoom={false}
      style={{ height: '65%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={coordinates}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map