'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useCountdownContext } from '../components/calendar/CountdownProvider';
import { DateTime } from 'luxon';
import Link from 'next/link';


const cityNames = ['София', 'Пловдив', 'Бургас', 'Варна'];

export default function Buy() {
    const { endDates } = useCountdownContext();
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const activeCities = useMemo(() => {
        const currentDateTime = DateTime.local();
        return cityNames.filter((_, index) => endDates[index] > currentDateTime);
    }, [endDates]);

    useEffect(() => {
        if (activeCities.length > 0) {
            const searchParams = new URLSearchParams(window.location.search);
            const cityFromUrl = searchParams.get('tab');
            const validCity = activeCities.find(city => city === cityFromUrl);
            
            if (validCity) {
                setActiveTab(validCity);
            } else {
                setActiveTab(activeCities[0]);
                router.push(`/buy?tab=${activeCities[0]}`);
            }
        } else {
            // Handle case when no cities are active
            router.push('/movie');
        }

        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname, activeCities, router]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        router.push(`/buy?tab=${tab}`);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'София':
                return <div><h1 className="text-3xl text-black font-bold mb-6">ЗА СОФИЯ</h1>
                <iframe style={{ width: '100%', height: '100vh' }} 
                src="https://bilet.bg/bg/events/cistota-ili-smiert-premiera-sofiia-5634-5634?noframe=true"
                ></iframe>
                <Link href="https://bilet.bg/bg/events/cistota-ili-smiert-premiera-sofiia-5634-5634" target="_blank"><span className="underline">Ако имате проблем при покупка на билети, използвайте този линк</span></Link>
                </div>;
            case 'Пловдив':
                return <div><h1 className="text-3xl text-black font-bold mb-6">ЗА ПЛОВДИВ</h1>
                <iframe style={{ width: '100%', height: '100vh' }} 
                src="https://bilet.bg/bg/events/cistota-ili-smiert-premiera-plovdiv-5636-5636?noframe=true" >

                </iframe>
                <Link href="https://bilet.bg/bg/events/cistota-ili-smiert-premiera-plovdiv-5636-5636" target="_blank"><span className="underline">Ако имате проблем при покупка на билети, използвайте този линк</span></Link>
                </div>;
            case 'Бургас':
                return <div><h1 className="text-3xl text-black font-bold mb-6">ЗА БУРГАС</h1>
                <iframe style={{ width: '100%', height: '100vh' }} 
                src="https://bilet.bg/bg/events/cistota-ili-smiert-premiera-burgas-5637-5637?noframe=true"
                ></iframe>
                <Link href="https://bilet.bg/bg/events/cistota-ili-smiert-premiera-burgas-5637-5637" target="_blank"><span className="underline">Ако имате проблем при покупка на билети, използвайте този линк</span></Link>
                </div>;
            case 'Варна':
                return <div><h1 className="text-3xl text-black font-bold mb-6">ЗА ВАРНА</h1>
                <iframe style={{ width: '100%', height: '100vh' }} 
                src="https://bilet.bg/bg/events/cistota-ili-smiert-premiera-varna-5638-5638?noframe=true"
                ></iframe>
                <Link href="https://bilet.bg/bg/events/cistota-ili-smiert-premiera-varna-5638-5638" target="_blank"><span className="underline">Ако имате проблем при покупка на билети, използвайте този линк</span></Link>
                </div>;
            default:
                return <div>Избери град за премиерата.</div>;
        }
    };

    if (activeCities.length === 0) {
        return <div>No active cities available.</div>;
    }

    return (

        <div className="w-full min-h-screen p-8 items-center mt-24 mx-auto flex flex-col">
            <h1 className="text-3xl text-black font-bold mb-6">Купи билети</h1>
            <div className="w-full max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center">
                    {activeCities.map((city) => (
                        <button
                            key={city}
                            className={`px-4 py-2 rounded text-xl sm:text-2xl w-full sm:w-auto ${
                                activeTab === city
                                    ? 'bg-purple-600 text-white font-semibold'
                                    : 'bg-gray-200 text-black'
                            }`}
                            onClick={() => handleTabChange(city)}
                        >
                            <span className={activeTab === city ? 'drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]' : ''}>
                                {city}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="bg-white w-full p-6 rounded shadow text-black text-center mt-6">
                {renderTabContent()}
            </div>
        </div>
    );
}