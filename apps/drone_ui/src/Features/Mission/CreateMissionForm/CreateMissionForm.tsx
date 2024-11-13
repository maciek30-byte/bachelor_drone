import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { Mission } from '../missionTypes';
import { FormControl } from './FormUtils';
import { INITIAL_FORM_VALUES } from './optionsConfig';
import { AiControlsSection } from './sections/AiControlsSection';
import { ButtonsSection } from './sections/ButtonsSection';
import { HeaderSection } from './sections/HeaderSection';
import { MainAssumptionSection } from './sections/MainAssumptionSection';
import { MissionDetailsSection } from './sections/MissionDetailsSection';
import { DroneTeamForm } from '../DroneTeamForm';
//TODO it should be two steps form or even 3 or for steps form : basic, drone team, apply Ai decisions//

export const CreateMissionForm = () => {
  const [showMap, setShowMap] = useState(false);
  const [selectedDrones, setSelectedDrones] = useState<string[]>([]);

  const { values, handleChange, handleSubmit, handleCancel, setValues } =
    useForm<Mission>({
      initialValues: INITIAL_FORM_VALUES,
      navigatePath: '/missions',
    });

  return (
    <div className="h-[calc(100vh-8rem)] overflow-y-auto px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <HeaderSection />
            <form onSubmit={handleSubmit} className="space-y-6">
              <MainAssumptionSection
                missionData={values}
                setMissionData={setValues}
                showMap={showMap}
                setShowMap={setShowMap}
              />

              <div className="divider"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MissionDetailsSection
                  missionData={values}
                  setMissionData={setValues}
                />
              </div>

              <div className="divider">Drone Team Selection</div>
              {/* <DroneTeamForm
                selectedDrones={selectedDrones}
                onDroneSelectionChange={setSelectedDrones}
              /> */}
              <span style={{color:"pink", fontSize:"24px"}}>Drone team will be suggested with AI assistant</span>

              <div className="divider"></div>

              <div className="bg-base-200 rounded-box p-4 space-y-4">
                <AiControlsSection
                  missionData={values}
                  setMissionData={setValues}
                />
              </div>

              <FormControl
                label="Mission Notes"
                hint="Enter additional mission details or special instructions"
              >
                <textarea
                  name="notes"
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Enter additional mission details or special instructions"
                  value={values.notes || ''}
                  onChange={handleChange}
                />
              </FormControl>
              <ButtonsSection handleCancel={handleCancel} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
