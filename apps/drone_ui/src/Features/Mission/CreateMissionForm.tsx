import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DroneTeamForm } from './DroneTeamForm';
import { MapComponent } from '../Map/MapComponent';

export const CreateMissionForm = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [selectedDrones, setSelectedDrones] = useState<string[]>([]);
  const [missionData, setMissionData] = useState({
    name: '',
    area: '',
    type: '',
    priority: '',
    dronesRequired: 1,
    startDateTime: '',
    duration: '',
    batteryOptimization: false,
    aiDecisions: false,
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ 
      ...missionData, 
      selectedDrones,
      timestamp: new Date().toISOString() 
    });
    navigate('/missions');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All progress will be lost.')) {
      navigate('/missions');
    }
  };

  return (
    <div className="p-4 overflow-y-auto">
      <div className="card bg-base-100 shadow-xl max-w-5xl w-full mx-auto my-8">
        <div className="card-body space-y-6">
          {/* Header */}
          <div className="border-b border-base-300 pb-4">
            <h2 className="card-title text-2xl font-bold">Create New Mission</h2>
            <p className="text-base-content/60 mt-1">Fill in the details to create a new drone mission</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mission Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Mission Name</span>
              </label>
              <input 
                type="text" 
                className="input input-bordered w-full" 
                placeholder="Enter descriptive mission name"
                value={missionData.name}
                onChange={(e) => setMissionData({...missionData, name: e.target.value})}
                required
              />
            </div>

            {/* Mission Area with Map */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Mission Area</span>
                <span className="label-text-alt text-info">AI Suggested: Zone B</span>
              </label>
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
            </div>

            <div className="divider"></div>

            {/* Mission Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Mission Type</span>
                  <span className="label-text-alt text-info">AI Suggested: Surveillance</span>
                </label>
                <select 
                  className="select select-bordered w-full"
                  value={missionData.type}
                  onChange={(e) => setMissionData({...missionData, type: e.target.value})}
                  required
                >
                  <option value="">Select type</option>
                  <option value="surveillance">Surveillance</option>
                  <option value="patrol">Routine Patrol</option>
                  <option value="delivery">Delivery</option>
                </select>
              </div>

              {/* Priority Level */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Priority Level</span>
                </label>
                <select 
                  className="select select-bordered w-full"
                  value={missionData.priority}
                  onChange={(e) => setMissionData({...missionData, priority: e.target.value})}
                  required
                >
                  <option value="">Select priority</option>
                  <option value="high" className="text-error">High</option>
                  <option value="medium" className="text-warning">Medium</option>
                  <option value="low" className="text-success">Low</option>
                </select>
              </div>
            </div>

            {/* Time and Duration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Start Date and Time */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Start Date & Time</span>
                </label>
                <input 
                  type="datetime-local" 
                  className="input input-bordered" 
                  value={missionData.startDateTime}
                  onChange={(e) => setMissionData({...missionData, startDateTime: e.target.value})}
                  required
                />
              </div>

              {/* Duration */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Duration (minutes)</span>
                </label>
                <input 
                  type="number" 
                  className="input input-bordered" 
                  placeholder="Enter duration"
                  min="1"
                  value={missionData.duration}
                  onChange={(e) => setMissionData({...missionData, duration: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="divider">Drone Team Selection</div>
            
            <DroneTeamForm 
              selectedDrones={selectedDrones}
              onDroneSelectionChange={setSelectedDrones}
            />

            <div className="divider"></div>

            {/* AI Controls */}
            <div className="bg-base-200 rounded-box p-4 space-y-4">
              <h3 className="font-medium text-base-content mb-2">AI Assistance</h3>
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-4">
                  <input 
                    type="checkbox" 
                    className="toggle toggle-primary"
                    checked={missionData.batteryOptimization}
                    onChange={(e) => setMissionData({...missionData, batteryOptimization: e.target.checked})}
                  />
                  <span className="label-text">Enable AI Battery Optimization</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-4">
                  <input 
                    type="checkbox" 
                    className="toggle toggle-primary"
                    checked={missionData.aiDecisions}
                    onChange={(e) => setMissionData({...missionData, aiDecisions: e.target.checked})}
                  />
                  <span className="label-text">Approve AI Decisions</span>
                </label>
              </div>
            </div>

            {/* Mission Notes */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Mission Notes</span>
              </label>
              <textarea 
                className="textarea textarea-bordered h-24" 
                placeholder="Enter additional mission details or special instructions"
                value={missionData.notes}
                onChange={(e) => setMissionData({...missionData, notes: e.target.value})}
              ></textarea>
            </div>

            {/* Updated buttons section */}
            <div className="card-actions justify-between mt-6 pt-4 border-t border-base-300">
              <button 
                type="button" 
                className="btn btn-error btn-outline"
                onClick={handleCancel}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel Mission
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Accept Parameters
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};