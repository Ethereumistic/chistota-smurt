'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const tabs = ['София', 'Пловдив', 'Бургас', 'Варна'];

export default function Buy() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && tabs.includes(tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

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
        <div className="w-full min-h-screen p-8 items-center mt-32 mx-auto flex flex-col">
            <h1 className="text-3xl text-black font-bold mb-6">Купи билети</h1>
            <div className="flex mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-6 py-3 mx-8 mr-2 rounded ${
                            activeTab === tab
                                ? 'bg-purple-600 text-white text-2xl font-semibold'
                                : 'bg-gray-200 text-black text-2xl'
                        }`}
                        onClick={() => handleTabChange(tab)}
                    >
                        <span                         key={tab}
                        className={` ${
                            activeTab === tab
                                ? 'drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]'
                                : ''
                        }`}>
                            {tab}
                        </span>
                    </button>
                ))}
            </div>
            <div className="bg-white w-[80%] p-6 rounded shadow text-black text-center">
                {renderTabContent()}
            </div>
        </div>
    );
}