import { FormControl } from '../FormUtils';
import { MissionArea } from '../MissionArea';
import { Mission } from '../../missionTypes';
export const MainAssumptionSection = ({
  missionData,
  setMissionData,
  showMap,
  setShowMap,
}: {
  missionData: Mission;
  setMissionData: (mission: Mission) => void;
  showMap: boolean;
  setShowMap: (showMap: boolean) => void;
}) => {
  return (
    <>
      <FormControl label="Mission Name" hint="Enter descriptive mission name">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter descriptive mission name"
          value={missionData.name}
          onChange={(e) =>
            setMissionData({ ...missionData, name: e.target.value })
          }
          required
        />
      </FormControl>
      <MissionArea
        missionData={missionData}
        setMissionData={setMissionData}
        showMap={showMap}
        setShowMap={setShowMap}
      />
    </>
  );
};
