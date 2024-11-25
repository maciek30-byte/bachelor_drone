import { MissionFormData } from './FormWrapper';
import { MainAssumptionSection } from './sections/MainAssumptionSection';
import { MissionDetailsSection } from './sections/MissionDetailsSection';
import { TimeAndDurationSection } from './sections/TimeAndDurationSection';

interface FirstStepProps {
  missionData: MissionFormData;
  setMissionData: (mission: MissionFormData) => void;
  showMap: boolean;
  setShowMap: (show: boolean) => void;
  setErrors?: (errors: Record<string, string[]>) => void;
  setIsValid?: (isValid: boolean) => void;
}

export const FirstStep = ({
  missionData,
  setMissionData,
  showMap,
  setShowMap,
}: FirstStepProps) => {

  return (
    <div>
      <MainAssumptionSection
        missionData={missionData}
        setMissionData={setMissionData}
        showMap={showMap}
        setShowMap={setShowMap}
      />
      <MissionDetailsSection
        missionData={missionData}
        setMissionData={setMissionData}
      />
      <TimeAndDurationSection
        missionData={missionData}
        setMissionData={setMissionData}
      />
    </div>
  );
};
