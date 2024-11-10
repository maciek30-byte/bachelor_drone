interface MissionBasicInfoProps {
    missionData: {
      name: string;
      area: string;
    };
    showMap: boolean;
    setShowMap: (show: boolean) => void;
    onDataChange: (field: string, value: string) => void;
  }
  
  export const MissionBasicInfo = ({ missionData, showMap, setShowMap, onDataChange }: MissionBasicInfoProps) => (
    <>
      <FormControl label="Mission Name">
        <input 
          type="text" 
          className="input input-bordered w-full" 
          placeholder="Enter descriptive mission name"
          value={missionData.name}
          onChange={(e) => onDataChange('name', e.target.value)}
          required
        />
      </FormControl>
  
      <FormControl 
        label="Mission Area"
        hint="AI Suggested: Zone B"
      >
        <div className="flex gap-2">
          <select 
            className="select select-bordered flex-1"
            value={missionData.area}
            onChange={(e) => onDataChange('area', e.target.value)}
            required
          >
            <option value="">Select area</option>
            <option value="zone-a">Zone A</option>
            <option value="zone-b">Zone B</option>
            <option value="zone-c">Zone C</option>
          </select>
          <MapToggleButton showMap={showMap} setShowMap={setShowMap} />
        </div>
      </FormControl>
    </>
  );