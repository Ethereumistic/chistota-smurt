import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { therapyCenters } from './therapyCenters';
import 'leaflet/dist/leaflet.css';

type CenterType = 'Adult' | 'Underaged' | 'Mixed' | 'All';

const TherapyMap = ({ className, filter }: { className: string, filter: CenterType }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const filteredCenters = filter === 'All' 
      ? therapyCenters 
      : therapyCenters.filter(center => center.type === filter);

    if (!isMounted) return null;

    return (
      <MapContainer className={className} center={[42.6977, 23.3219]} zoom={7} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredCenters.map((center, index) => (
          <Marker key={index} position={center.position}>
            <Popup>
              <div>
                <h3>{center.name}</h3>
                <p><strong>Адрес:</strong> {center.address}</p>
                <ul>
                  {center.phone.map((phone: string, idx: number) => (
                    <li key={idx}>{phone}</li>
                  ))}
                </ul>

                <p><strong>Email:</strong></p>
                <ul>
                  {center.email.map((email: string, idx: number) => (
                    <li key={idx}><a href={`mailto:${email}`}>{email}</a></li>
                  ))}
                </ul>
                <p><strong>Уебсайт:</strong> <a href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</a></p>
  
                <h4>Дейности:</h4>
                <ul>
                  {center.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
  
                <h4>Условия за прием:</h4>
                <ul>
                  {center.conditions.map((condition, idx) => (
                    <li key={idx}>{condition}</li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  };
  
  export default TherapyMap;