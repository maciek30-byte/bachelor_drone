import { FormControl } from "../FormUtils"
import { MissionFormData } from "../FormWrapper"
export const TimeAndDurationSection = ({missionData, setMissionData}: {missionData: MissionFormData, setMissionData: (mission: MissionFormData) => void}) => {
    return (
        <>
        <FormControl
                label="Start Date & Time"
                hint="Select start date and time"
              >
                <input
                  type="datetime-local"
                  className="input input-bordered"
                  value={missionData.startDateTime}
                  onChange={(e) =>
                    setMissionData({
                      ...missionData,
                      startDateTime: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>
              <FormControl label="Duration in miliseconds" hint="Select duration in miliseconds">
                <input
                  type="number"
                  className="input input-bordered"
                  value={missionData.startDateTime}
                  onChange={(e) =>
                    setMissionData({
                      ...missionData,
                      startDateTime: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>
        </>
    )
}