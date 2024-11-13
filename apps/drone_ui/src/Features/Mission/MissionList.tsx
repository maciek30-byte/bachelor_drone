import { useEffect, useState } from 'react';
import { MissionService } from '../../api/MissionService';
import { useFetch } from '../../hooks/useFetch';

const BASE_URL = "http://localhost:3000/api";

interface Mission {
  id: string;
  name: string;
  area: string;
  type: string;
  priority: string;
  startDateTime: string;
  duration: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  selectedDrones: string[];
  timestamp: string;
}

export const MissionList = () => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  // Mock data - replace with actual API data
  const missions: Mission[] = [
    {
      id: '1',
      name: 'Surveillance Alpha',
      area: 'zone-a',
      type: 'surveillance',
      priority: 'high',
      startDateTime: '2024-03-21T14:00',
      duration: '120',
      status: 'in-progress',
      selectedDrones: ['1', '4'],
      timestamp: '2024-03-21T10:30:45.123Z'
    },
    // Add more mock missions...
  ];

  const completedMissions = missions.filter(m => m.status === 'completed');

  const getStatusColor = (status: Mission['status']) => {
    switch (status) {
      case 'pending': return 'badge-warning';
      case 'in-progress': return 'badge-info';
      case 'completed': return 'badge-success';
      case 'failed': return 'badge-error';
      default: return 'badge-ghost';
    }
  };

  const {data, loading, error} = useFetch<Mission[]>({url: `${BASE_URL}/missions`});
  console.log(" this is a mission whoole list", data);



  return (
    <div className="flex h-screen bg-base-200">
      {/* Main Mission List */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Active Missions</h2>
          <button className="btn btn-primary">Create New Mission</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missions.filter(m => m.status !== 'completed').map((mission) => (
            <div 
              key={mission.id}
              className={`card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow
                ${selectedMission?.id === mission.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedMission(mission)}
            >
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h3 className="card-title">{mission.name}</h3>
                  <span className={`badge ${getStatusColor(mission.status)}`}>
                    {mission.status}
                  </span>
                </div>
                
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-base-content/60">
                    Area: {mission.area.toUpperCase()}
                  </p>
                  <p className="text-sm text-base-content/60">
                    Type: {mission.type}
                  </p>
                  <p className="text-sm text-base-content/60">
                    Start: {new Date(mission.startDateTime).toLocaleString()}
                  </p>
                  <p className="text-sm text-base-content/60">
                    Duration: {mission.duration} minutes
                  </p>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm">Details</button>
                  <button className="btn btn-sm btn-primary">Control</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission History Sidebar */}
      <div className="w-80 bg-base-100 p-4 overflow-y-auto">
        <h3 className="font-bold text-lg mb-4">Mission History</h3>
        <div className="space-y-2">
          {completedMissions.map((mission) => (
            <div 
              key={mission.id}
              className="collapse collapse-arrow bg-base-200"
            >
              <input type="radio" name="history-accordion" /> 
              <div className="collapse-title font-medium">
                <div className="flex justify-between items-center">
                  <span>{mission.name}</span>
                  <span className={`badge badge-sm ${getStatusColor(mission.status)}`}>
                    {mission.status}
                  </span>
                </div>
              </div>
              <div className="collapse-content"> 
                <div className="space-y-2 text-sm">
                  <p>Area: {mission.area.toUpperCase()}</p>
                  <p>Type: {mission.type}</p>
                  <p>Start: {new Date(mission.startDateTime).toLocaleString()}</p>
                  <p>Duration: {mission.duration} minutes</p>
                  <button className="btn btn-xs btn-ghost mt-2">View Report</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};