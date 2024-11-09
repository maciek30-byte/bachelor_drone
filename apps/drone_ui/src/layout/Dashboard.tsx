import { useState } from 'react';
import { MapComponent } from '../components/Map/MapComponent';
import { Realifications } from '../components/Relifications/Relifications';
import { DronesInfo } from '../components/DronesInfo/DronesInfo';
import { ActiveStatus } from '../components/ActiveStatus/ActiveStatus';
import { KeyObjectives } from '../components/KeyObjectives/KeyObjectives';

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-4 max-w-[1920px]">
      {/* Main Grid Content */}
      <div className="grid grid-cols-11 grid-rows-6 gap-4 h-[calc(100vh-12rem)]">
        {/* Map */}
        <div className="col-span-7 row-span-4 bg-base-100 rounded-box shadow-lg overflow-hidden">
          <div className="relative h-full">
            <MapComponent />
          </div>
        </div>

        {/* Right Side Components */}
        <div className="col-span-4 row-span-2 bg-base-100 rounded-box shadow-lg overflow-auto">
          <Realifications />
        </div>

        <div className="col-span-4 row-span-4 bg-base-100 rounded-box shadow-lg overflow-auto">
          <DronesInfo />
        </div>

        {/* Bottom Components */}
        <div className="col-span-7 row-span-1 bg-base-100 rounded-box shadow-lg">
          <ActiveStatus />
        </div>

        <div className="col-span-7 row-span-1 bg-base-100 rounded-box shadow-lg">
          <KeyObjectives />
        </div>
      </div>
    </div>
  );
};
