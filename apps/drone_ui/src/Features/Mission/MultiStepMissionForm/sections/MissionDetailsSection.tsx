import { FormControl } from "../FormUtils"
import { FormSelect } from "../FormUtils"
import { missionTypeSelectOptions, missionPrioritySelectOptions } from "../optionsConfig"
import { Mission } from "../../missionTypes"

export const MissionDetailsSection = ({missionData, setMissionData}: {missionData: Mission, setMissionData: (mission: Mission) => void}) => {
    return (
        <>
              <FormControl label="Mission Type" hint="Select type of mission">
                <FormSelect
                  options={missionTypeSelectOptions}
                  value={missionData.type}
                  onChange={(e) => setMissionData({ ...missionData, type: e })}
                />
              </FormControl>

              <FormControl label="Priority Level" hint="Select priority level">
                <FormSelect
                  options={missionPrioritySelectOptions}
                  value={missionData.priority}
                  onChange={(e) =>
                    setMissionData({ ...missionData, priority: e })
                  }
                />
              </FormControl>
        </>
    )
}