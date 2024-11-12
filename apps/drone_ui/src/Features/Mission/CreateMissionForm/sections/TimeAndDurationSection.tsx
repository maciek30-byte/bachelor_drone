import { FormControl } from "../FormUtils"
import { Mission } from "../../missionTypes"

export const TimeAndDurationSection = ({missionData, setMissionData}: {missionData: Mission, setMissionData: (mission: Mission) => void}) => {
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
              <FormControl label="Duration" hint="Select duration">
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
        </>
    )
}