import { useState } from 'react';

interface SystemStatus {
  health: 'Operational' | 'Degraded' | 'Critical';
  activeMissions: number;
  activeDrones: number;
  batteryLevels: {
    high: number;
    medium: number;
    low: number;
  };
  incidentsUnderReview: number;
  alerts: Array<{
    id: string;
    description: string;
    status: 'Pending' | 'Resolved';
    timestamp: string;
  }>;
}

const mockStatus: SystemStatus = {
  health: 'Operational',
  activeMissions: 5,
  activeDrones: 12,
  batteryLevels: {
    high: 8,
    medium: 3,
    low: 1,
  },
  incidentsUnderReview: 3,
  alerts: [
    {
      id: 'ALERT-001',
      description: 'Low battery warning on drone DR-002 (15%)',
      status: 'Pending',
      timestamp: '2024-03-21T15:30:00Z'
    },
    {
      id: 'ALERT-002',
      description: 'Connectivity issues detected in Zone C',
      status: 'Pending',
      timestamp: '2024-03-21T15:25:00Z'
    }
  ]
};

export const ActiveStatus = () => {
  const [status] = useState<SystemStatus>(mockStatus);

  const getHealthColor = (health: SystemStatus['health']) => {
    switch (health) {
      case 'Operational': return 'text-success';
      case 'Degraded': return 'text-warning';
      case 'Critical': return 'text-error';
    }
  };

  const getAlertStatusColor = (alertStatus: SystemStatus['alerts'][0]['status']) => {
    switch (alertStatus) {
      case 'Pending': return 'badge-warning';
      case 'Resolved': return 'badge-success';
    }
  };

  return (
    <div className="bg-ai-dark p-4 rounded-box">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-ai-green">System Status</h2>
        <div className="flex items-center gap-2">
          <span className={`font-medium ${getHealthColor(status.health)}`}>
            {status.health}
          </span>
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            status.health === 'Operational' ? 'bg-success' :
            status.health === 'Degraded' ? 'bg-warning' : 'bg-error'
          }`}></div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {/* Stats */}
        <div className="stats bg-ai-gray shadow col-span-3">
          <div className="stat place-items-center p-2">
            <div className="stat-title text-xs text-ai-text/60">Active Missions</div>
            <div className="stat-value text-lg text-ai-text">{status.activeMissions}</div>
          </div>
          
          <div className="stat place-items-center p-2">
            <div className="stat-title text-xs text-ai-text/60">Active Drones</div>
            <div className="stat-value text-lg text-ai-text">{status.activeDrones}</div>
          </div>
          
          <div className="stat place-items-center p-2">
            <div className="stat-title text-xs text-ai-text/60">Pending Reviews</div>
            <div className="stat-value text-lg text-ai-text">{status.incidentsUnderReview}</div>
          </div>
        </div>

        {/* Battery Levels */}
        <div className="col-span-2 bg-ai-gray rounded-box p-3">
          <div className="text-xs text-ai-text/60 mb-2">Battery Status</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-success">High</span>
              <span className="text-xs text-ai-text">{status.batteryLevels.high} drones</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-warning">Medium</span>
              <span className="text-xs text-ai-text">{status.batteryLevels.medium} drones</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-error">Low</span>
              <span className="text-xs text-ai-text">{status.batteryLevels.low} drones</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="mt-4">
        <div className="text-sm text-ai-text/60 mb-2">Active Alerts</div>
        <div className="space-y-2">
          {status.alerts.map(alert => (
            <div key={alert.id} 
                 className="flex items-center justify-between bg-ai-gray p-2 rounded-box border border-ai-light">
              <div className="flex items-center gap-2">
                <span className="text-xs text-ai-text/60">{alert.id}</span>
                <span className="text-sm text-ai-text">{alert.description}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`badge badge-sm ${getAlertStatusColor(alert.status)}`}>
                  {alert.status}
                </span>
                <button className="btn btn-xs btn-ghost text-ai-green">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};