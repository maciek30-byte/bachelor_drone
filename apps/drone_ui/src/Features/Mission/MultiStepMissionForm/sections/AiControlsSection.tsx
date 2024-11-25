import { Mission } from '../../missionTypes';
import { FormControl } from '../FormUtils';

export const AiControlsSection = ({
  missionData,
  setMissionData,
}: {
  missionData: Mission;
  setMissionData: (mission: Mission) => void;
}) => {
  return (
    <>
      <h3 className="font-medium text-base-content mb-2">AI Assistance</h3>
      <label className="w-full cursor-pointer">
        <FormControl
          label="Battery Optimization"
          hint="Enable AI Battery Optimization"
        >
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={missionData.batteryOptimization}
            onChange={(e) =>
              setMissionData({
                ...missionData,
                batteryOptimization: e.target.checked,
              })
            }
            aria-label="Toggle battery optimization"
            role="switch"
          />
        </FormControl>
      </label>
      
      <label className="w-full cursor-pointer">
        <FormControl
          label="Approve AI Decisions"
          hint="Enable AI Decisions Approval"
        >
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={missionData.aiDecisions}
            onChange={(e) =>
              setMissionData({ ...missionData, aiDecisions: e.target.checked })
            }
            aria-label="Toggle AI decisions approval"
            role="switch"
          />
        </FormControl>
      </label>
    </>
  );
};
