import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { therapyCenters, TherapyCenter } from './therapyCenters';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import L from 'leaflet';

type CenterType = 'Терапевтични общности' | 'Програми за непълнолетни' | 'Дневни центрове' | 'Вечерни програми' | 'All';

interface TherapyMapProps {
  className: string;
  filter: CenterType;
  selectedCenter: TherapyCenter | null;
}



export default function TherapyMap({ className, filter, selectedCenter }: TherapyMapProps) {
  const mapRef = useRef<L.Map>(null);
  const [isMounted, setIsMounted] = useState(false);

  const customIcon = new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/lrpin.png', // Update path as necessary
      iconSize: [25, 25], // Size of the icon
  });

  const icons = {
    'Терапевтични общности': new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/pins/therapy.png',
      iconSize: [25, 25],
    }),
    'Програми за непълнолетни': new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/pins/minor.png',
      iconSize: [25, 25],
    }),
    'Дневни центрове': new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/pins/day.png',
      iconSize: [25, 25],
    }),
    'Вечерни програми': new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/pins/night.png',
      iconSize: [25, 25],
    }),
  };

  useEffect(() => {
    if (selectedCenter && mapRef.current) {
        mapRef.current.setView(selectedCenter.position, 15);
    }
}, [selectedCenter]);
  
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const filteredCenters = filter === 'All' 
      ? therapyCenters 
      : therapyCenters.filter(center => center.type === filter);


    

    if (!isMounted) return null;

    return (
        <>
        
      <MapContainer className={className} ref={mapRef} center={[42.7339, 25.4858]} zoom={8} style={{ height: '86vh', width: '90%', position: 'sticky', top: '120px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredCenters.map((center, index) => (
          <Marker 
          key={index} 
          position={center.position} 
          icon={icons[center.type]}
          >
            <Popup>
              <div>
                <h3>{center.name}</h3>
                <p><strong>Адрес:</strong> {center.address}</p>
                
                <p><strong>Телефон:</strong></p>
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
                  {center.activities?.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
  
                <h4>Условия за прием:</h4>
                <ul>
                  {center.conditions?.map((condition, idx) => (
                    <li key={idx}>{condition}</li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      </>
    );
  };
  
