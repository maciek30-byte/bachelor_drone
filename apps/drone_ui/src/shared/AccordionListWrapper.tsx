import { AIDecisionsList } from '../Features/Agent/AiDecisionList';
import { IncidentList } from '../Features/Mission/IncidentList';

interface AccordionWrapperProps {
  activeList: 'decisions' | 'incidents',
  setActiveList: React.Dispatch<React.SetStateAction<'decisions' | 'incidents'>>
}

export const AccordionWrapper = ({ activeList, setActiveList }: AccordionWrapperProps) => {
  return (
    <div className="h-[40vh] flex flex-col gap-2 pr-2">
      {/* List Headers */}
      <div className="flex gap-4">
        <button 
          onClick={() => setActiveList('decisions')}
          className={`flex-1 rounded-box text-center font-bold transition-colors
            ${activeList === 'decisions' 
              ? 'bg-ai-dark text-ai-green border-2 border-ai-green' 
              : 'bg-ai-gray text-ai-text hover:bg-ai-dark'}`}
        >
          AI Decisions
        </button>
        <button 
          onClick={() => setActiveList('incidents')}
          className={`flex-1 rounded-box text-center font-bold transition-colors
            ${activeList === 'incidents' 
              ? 'bg-ai-dark text-ai-green border-2 border-ai-green' 
              : 'bg-ai-gray text-ai-text hover:bg-ai-dark'}`}
        >
          Incident Monitor
        </button>
      </div>

      {/* Active List */}
      <div className="flex-1 rounded-box bg-base-100 shadow-lg overflow-hidden">
        <div className="h-full overflow-y-auto">
          {activeList === 'decisions' ? <AIDecisionsList /> : <IncidentList />}
        </div>
      </div>
    </div>
  );
};