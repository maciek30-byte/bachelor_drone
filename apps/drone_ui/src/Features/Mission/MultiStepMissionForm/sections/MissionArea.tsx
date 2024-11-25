import { MapComponent } from "../../../Map/MapComponent";
import { Mission } from "../missionTypes";
import { FormControl } from "../FormUtils";

interface MissionAreaProps {
    missionData:Mission;
    setMissionData: (data: Mission) => void;
    showMap: boolean;
    setShowMap: (show: boolean) => void;
}

export const MissionArea = ({missionData, setMissionData, showMap, setShowMap}: MissionAreaProps) => {
    return (
        <FormControl 
            label="Mission Area" 
            hint="AI Suggested: Zone B"
        >
            <div className="flex gap-2">
                <select 
                    className="select select-bordered flex-1"
                    value={missionData.area}
                    onChange={(e) => setMissionData({...missionData, area: e.target.value})}
                    required
                >
                    <option value="">Select area</option>
                    <option value="zone-a">Zone A</option>
                    <option value="zone-b">Zone B</option>
                    <option value="zone-c">Zone C</option>
                </select>
                <button 
                    type="button"
                    className="btn btn-square btn-outline"
                    onClick={() => setShowMap(!showMap)}
                >
                    🗺️
                </button>
            </div>
            {showMap && (
                <div className="mt-2 h-64 rounded-box overflow-hidden border border-base-300">
                    <MapComponent />
                </div>
            )}
        </FormControl>
    )
}
