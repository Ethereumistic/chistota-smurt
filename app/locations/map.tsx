import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { therapyCenters, TherapyCenter } from './therapyCenters';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import L from 'leaflet';
import Link from 'next/link';

type CenterType = 'Терапевтични общности' | 'Програми за непълнолетни' | 'Дневни центрове' | 'Вечерни програми' | 'All';

interface TherapyMapProps {
  className: string;
  filter: CenterType;
  selectedCenter: TherapyCenter | null;
  onMarkerClick: (center: TherapyCenter) => void; // Add this line
  onViewMoreInfo: (center: TherapyCenter) => void;
  isMobile: boolean;
}

function MapInteraction({ selectedCenter, isMobile }: { selectedCenter: TherapyCenter | null, isMobile: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (selectedCenter) {
      const [lat, lng] = selectedCenter.position;
      
      // Set the new view
      map.setView([lat, lng], isMobile ? 13 : 15, { animate: true });
      
      // Find the marker for the selected center and open its popup
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker && layer.getLatLng().equals(selectedCenter.position)) {
          layer.openPopup();
        }
      });
    }
  }, [map, selectedCenter, isMobile]);

  return null;
}

export default function TherapyMap({ className, filter, selectedCenter, onMarkerClick, onViewMoreInfo, isMobile }: TherapyMapProps) {
  const mapRef = useRef<L.Map>(null);
  const [isMounted, setIsMounted] = useState(false);

  const customIcon = new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/lrpin.png', // Update path as necessary
      iconSize: [25, 25], // Size of the icon
  });

  const icons = {
    'Терапевтични общности': new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/pins/1.png',
      iconSize: [25, 25],
    }),
    'Програми за непълнолетни': new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/pins/2.png',
      iconSize: [25, 25],
    }),
    'Дневни центрове': new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/pins/3.png',
      iconSize: [25, 25],
    }),
    'Вечерни програми': new Icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/pins/4.png',
      iconSize: [25, 25],
    }),
  };

  useEffect(() => {
    if (selectedCenter && mapRef.current) {
        mapRef.current.setView(selectedCenter.position, 12);
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
        
        <MapContainer 
  className={`${className} map-container`} // Add the new class here
  ref={mapRef} 
  center={[42.7339, 25.4858]} 
  zoom={8} 
  style={{ 
    height: '86vh', 
    position: 'sticky', 
    top: '112px', 
    zIndex: 5001 
  }}
>
      
  <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredCenters.map((center, index) => (
        <Marker 
        key={index} 
        position={center.position} 
        icon={icons[center.type]}
        eventHandlers={{
          click: () => {
            // Always call onMarkerClick, but it will only open accordion on desktop
            onMarkerClick(center);
          }
        }}
          >
            <Popup className=' w-56 cst:w-96' keepInView={true} >
              <div className='text-black font-montserrat '>
                <h3 className='cst:text-xl text-[16px] border-b border-gray-300 pb-1'>{center.name}</h3>
                <p className='border-b border-gray-300 pb-1'><strong className='mr-4 text-xs cst:text-lg '>📌Адрес:</strong> <span className='text-xs cst:text-base'>{center.address}</span></p>
                
                <p className=''><strong className='mr-4 text-xs cst:text-lg'>📞Телефон:</strong></p>
                <ul className='border-b border-gray-300 pb-2'>
                  {center.phone.map((phone: string, idx: number) => (
                    <li className='text-xs cst:text-base' key={idx}>{phone}</li>
                  ))}
                </ul>

                <p className='text-xs cst:text-lg'><strong>📧Email:</strong></p>
                <ul className='border-b border-gray-300 pb-1 '>
                  {center.email.map((email: string, idx: number) => (
                    <li key={idx}><Link href={`mailto:${email}`} className='text-xs cst:text-base'>{email}</Link></li>
                  ))}
                </ul>
                <p className='mr-4 text-xs cst:text-lg'><strong>🌎Уебсайт:</strong> <Link className='text-xs cst:text-base' href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</Link></p>
  
                {/* <h4>Дейности:</h4>
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
                </ul> */}

                {isMobile && (
                  <button 
                    className="flex justify-center items-center mx-auto mt-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onViewMoreInfo(center)}
                  >
                    Виж повече информация
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        <MapInteraction selectedCenter={selectedCenter} isMobile={isMobile} />
        </MapContainer>
      </>
    );
  };
  
