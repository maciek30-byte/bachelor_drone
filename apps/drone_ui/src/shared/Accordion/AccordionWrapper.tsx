import { AIDecisionsList } from '../../Features/Agent/AiDecisionList';
import { IncidentList } from '../../Features/Mission/IncidentList';
import { AccordionButton } from './AccordionButton';
import { useState } from 'react';

export const AccordionWrapper = () => {
  const [activeList, setActiveList] = useState<'decisions' | 'incidents'>('incidents');
  
  return (
    <div className="h-[40vh] flex flex-col gap-2 pr-2">
      <div className="flex gap-4">
        <AccordionButton
          activeList={activeList}
          setActiveList={setActiveList}
          label="AI Decisions"
          value="decisions"
        />
        <AccordionButton
          activeList={activeList}
          setActiveList={setActiveList}
          label="Incident Monitor"
          value="incidents"
        />
      </div>
      <div className="flex-1 rounded-box bg-base-100 shadow-lg overflow-hidden">
        <div className="h-full overflow-y-auto">
          {activeList === 'decisions' ? <AIDecisionsList /> : <IncidentList />}
        </div>
      </div>
    </div>
  );

}
 

  
