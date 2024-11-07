import { Sidebar } from '../components/Sidebar/Sidebar';
import { MapContainer } from '../components/Map/MapContainer';
import { Realifications } from '../components/Relifications/Relifications';
import { DronesInfo } from '../components/DronesInfo/DronesInfo';
import { ActiveStatus } from '../components/ActiveStatus/ActiveStatus';
import { KeyObjectives } from '../components/KeyObjectives/KeyObjectives';
import { useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { MapComponent } from '../components/Map/MapComponent';

export const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="h-screen w-screen grid grid-cols-12 grid-rows-6 gap-4 p-4 bg-gray-100">
            <div className="col-span-1 row-span-6 z-50">
                <Sidebar />
            </div>

            <div className="col-span-7 row-span-4 z-10">
                <MapComponent />
                {/* <Modal isMapExpanded={isModalOpen} setIsMapExpanded={setIsModalOpen} /> */}
            </div>

            <div className="col-span-4 row-span-2">
                <Realifications />
            </div>

            <div className="col-span-4 row-span-4">
                <DronesInfo />
            </div>

            <div className="col-span-7 row-span-1">
                <ActiveStatus />
            </div>

            <div className="col-span-7 row-span-1">
                <KeyObjectives />
            </div>
        </div>
    );
};