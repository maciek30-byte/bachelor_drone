import { useState } from 'react';

interface Drone {
  id: string;
  name: string;
  type: string;
  status: 'available' | 'busy' | 'charging' | 'maintenance';
  batteryLevel: number;
}

interface DroneTeamFormProps {
  selectedDrones: string[];
  onDroneSelectionChange: (drones: string[]) => void;
}

export const DroneTeamForm = ({ selectedDrones, onDroneSelectionChange }: DroneTeamFormProps) => {
  const [droneTypeFilter, setDroneTypeFilter] = useState<string>('all');
  const [requiredDrones, setRequiredDrones] = useState<number>(1);

  // Mock data - replace with actual drone data from your API
  const availableDrones: Drone[] = [
    { id: '1', name: 'Drone Alpha', type: 'Surveillance', status: 'available', batteryLevel: 85 },
    { id: '2', name: 'Drone Beta', type: 'Patrol', status: 'available', batteryLevel: 92 },
    { id: '3', name: 'Drone Gamma', type: 'Delivery', status: 'charging', batteryLevel: 45 },
    { id: '4', name: 'Drone Delta', type: 'Surveillance', status: 'available', batteryLevel: 78 },
    { id: '5', name: 'Drone Epsilon', type: 'Patrol', status: 'maintenance', batteryLevel: 15 },
    { id: '6', name: 'Drone Zeta', type: 'Delivery', status: 'busy', batteryLevel: 67 },
  ];

  const droneTypes = ['all', ...new Set(availableDrones.map(drone => drone.type))];

  const filteredDrones = availableDrones.filter(drone => 
    droneTypeFilter === 'all' || drone.type === droneTypeFilter
  );

  const handleDroneToggle = (droneId: string) => {
    if (selectedDrones.includes(droneId)) {
      onDroneSelectionChange(selectedDrones.filter(id => id !== droneId));
    } else {
      if (selectedDrones.length < requiredDrones) {
        onDroneSelectionChange([...selectedDrones, droneId]);
      }
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 70) return 'text-success';
    if (level > 30) return 'text-warning';
    return 'text-error';
  };

  const getStatusBadgeColor = (status: Drone['status']) => {
    switch (status) {
      case 'available': return 'badge-success';
      case 'busy': return 'badge-warning';
      case 'charging': return 'badge-info';
      case 'maintenance': return 'badge-error';
      default: return 'badge-ghost';
    }
  };

  const getTeamStats = () => {
    const selectedDroneObjects = availableDrones.filter(d => selectedDrones.includes(d.id));
    const avgBattery = Math.round(
      selectedDroneObjects.reduce((acc, d) => acc + d.batteryLevel, 0) / selectedDrones.length
    );
    const droneTypes = selectedDroneObjects.reduce((acc, drone) => {
      acc[drone.type] = (acc[drone.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { avgBattery, droneTypes };
  };

  return (
    <div className="bg-base-200 rounded-box p-4 space-y-6">
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Required Drones</span>
            <span className="label-text-alt text-info">
              {selectedDrones.length}/{requiredDrones} selected
            </span>
          </label>
          <input 
            type="number" 
            className="input input-bordered w-full" 
            min="1"
            max={availableDrones.length}
            value={requiredDrones}
            onChange={(e) => {
              const value = Math.max(1, Math.min(parseInt(e.target.value) || 1, availableDrones.length));
              setRequiredDrones(value);
              if (selectedDrones.length > value) {
                onDroneSelectionChange(selectedDrones.slice(0, value));
              }
            }}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Drone Type</span>
            <span className="label-text-alt">
              {filteredDrones.length} available
            </span>
          </label>
          <select 
            className="select select-bordered w-full"
            value={droneTypeFilter}
            onChange={(e) => setDroneTypeFilter(e.target.value)}
          >
            {droneTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selection Warning */}
      {selectedDrones.length > requiredDrones && (
        <div className="alert alert-warning shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>You've selected more drones than required ({selectedDrones.length}/{requiredDrones})</span>
        </div>
      )}

      {/* Available Drones Stats */}
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat">
          <div className="stat-title">Total Drones</div>
          <div className="stat-value">{availableDrones.length}</div>
          <div className="stat-desc">In the fleet</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">Available</div>
          <div className="stat-value text-success">
            {availableDrones.filter(d => d.status === 'available').length}
          </div>
          <div className="stat-desc">Ready for mission</div>
        </div>

        <div className="stat">
          <div className="stat-title">Unavailable</div>
          <div className="stat-value text-error">
            {availableDrones.filter(d => d.status !== 'available').length}
          </div>
          <div className="stat-desc">Maintenance/Busy/Charging</div>
        </div>
      </div>

      {/* Drone Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDrones.map((drone) => (
          <div 
            key={drone.id}
            className={`card bg-base-100 hover:bg-base-200 transition-colors cursor-pointer ${
              selectedDrones.includes(drone.id) ? 'ring-2 ring-primary' : ''
            } ${drone.status !== 'available' ? 'opacity-50' : ''}`}
            onClick={() => drone.status === 'available' && handleDroneToggle(drone.id)}
          >
            <div className="card-body p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{drone.name}</h4>
                  <p className="text-sm text-base-content/60">{drone.type}</p>
                </div>
                <input 
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={selectedDrones.includes(drone.id)}
                  onChange={() => drone.status === 'available' && handleDroneToggle(drone.id)}
                  disabled={drone.status !== 'available' || (!selectedDrones.includes(drone.id) && selectedDrones.length >= requiredDrones)}
                />
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <span className={`badge ${getStatusBadgeColor(drone.status)} badge-sm`}>
                  {drone.status}
                </span>
                <span className={`text-sm ${getBatteryColor(drone.batteryLevel)}`}>
                  🔋 {drone.batteryLevel}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Summary */}
      {selectedDrones.length > 0 && (
        <div className="mt-4 p-4 bg-base-300 rounded-box space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Team Summary</span>
            <span className="text-sm text-base-content/60">
              {selectedDrones.length} of {requiredDrones} drones selected
            </span>
          </div>
          
          <div className="divider my-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Average Battery</span>
              <span className={`text-sm ${getBatteryColor(getTeamStats().avgBattery)}`}>
                {getTeamStats().avgBattery}%
              </span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Drone Types:</span>
              {Object.entries(getTeamStats().droneTypes).map(([type, count]) => (
                <div key={type} className="flex justify-between text-sm">
                  <span>{type}</span>
                  <span>{count}x</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};