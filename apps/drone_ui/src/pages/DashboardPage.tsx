import { useState } from 'react';
import { MapComponent } from '../Features/Map/MapComponent';
import { KeyObjectives } from '../Features/Mission/KeyObjectives';
import { SafetyPanel } from '../Features/SafetyPanel/SafetyPanel';
import { DronesInfo } from '../Features/Drones/DronesInfo';
import { AccordionWrapper } from '../shared/AccordionListWrapper';

//@TODO get rid of use state logic from there//

export const DashboardPage = () => {
  const [activeList, setActiveList] = useState<'decisions' | 'incidents'>(
    'incidents',
  );

  return (
    <div className="grid grid-cols-10 h-screen bg-ai-dark p-2">
      <div className="col-span-5 flex flex-col gap-4 pr-2">
        <div className="h-[40%] bg-ai-gray border border-ai-light rounded-lg overflow-hidden">
          <MapComponent />
        </div>

        <div className="h-[25%] bg-ai-gray/20 border border-ai-light rounded-lg">
          <KeyObjectives />
        </div>

        <div className="h-[25%] bg-ai-gray/20 border border-ai-light rounded-lg p-4">
          <SafetyPanel />
        </div>
      </div>

      <div className="col-span-5 flex flex-col gap-4 pl-2">
        <div className="h-[48%]">
          <AccordionWrapper
            activeList={activeList}
            setActiveList={setActiveList}
          />
        </div>

        <div className="h-[33%] bg-ai-gray/20 border border-ai-light rounded-lg">
          <DronesInfo />
        </div>
      </div>
    </div>
  );
};
