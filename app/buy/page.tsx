'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const tabs = ['София', 'Пловдив', 'Бургас', 'Варна'];

export default function Buy() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const cityFromUrl = searchParams.get('tab');
        if (cityFromUrl && tabs.includes(cityFromUrl)) {
            setActiveTab(cityFromUrl);
        }

        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        router.push(`/buy?tab=${tab}`);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'София':
                return <div>ЗА СОФИЯ</div>;
            case 'Пловдив':
                return <div>ЗА ПЛОВДИВ</div>;
            case 'Бургас':
                return <div>ЗА БУРГАС</div>;
            case 'Варна':
                return <div>ЗА ВАРНА</div>;
            default:
                return <div>Избери град за премиерата.</div>;
        }
    };

    return (
        <div className="w-full min-h-screen p-8 items-center mt-24 mx-auto flex flex-col">
            <h1 className="text-3xl text-black font-bold mb-6">Купи билети</h1>
            <div className="flex flex-wrap mb-6 w-full justify-center items-center">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded text-xl sm:text-2xl ${
                                activeTab === tab
                                    ? 'bg-purple-600 text-white font-semibold'
                                    : 'bg-gray-200 text-black'
                            }`}
                            onClick={() => handleTabChange(tab)}
                        >
                            <span
                                className={activeTab === tab ? 'drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]' : ''}
                            >
                                {tab}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="bg-white w-full p-6 rounded shadow text-black text-center">
                {renderTabContent()}
            </div>
        </div>
    );
}