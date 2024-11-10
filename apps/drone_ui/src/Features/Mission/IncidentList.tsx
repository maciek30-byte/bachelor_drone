import { useState } from 'react';

interface Incident {
  id: string;
  timestamp: string;
  location: string;
  type: 'Intrusion' | 'Unidentified Object' | 'Restricted Area Entry' | 'Suspicious Activity';
  status: 'Active' | 'Resolved' | 'Pending';
  assignedDrones: string[];
  priority: 'High' | 'Medium' | 'Low';
  description: string;
}

const mockIncidents: Incident[] = [
  {
    id: 'INC-12345',
    timestamp: '2024-03-21 14:30',
    location: 'Zone A',
    type: 'Intrusion',
    status: 'Active',
    assignedDrones: ['DR-001', 'DR-002'],
    priority: 'High',
    description: 'Unauthorized vehicle detected near perimeter fence'
  },
  {
    id: 'INC-12346',
    timestamp: '2024-03-21 13:15',
    location: 'Zone B',
    type: 'Unidentified Object',
    status: 'Pending',
    assignedDrones: ['DR-003'],
    priority: 'Medium',
    description: 'Unknown object spotted during routine surveillance'
  },
  {
    id: 'INC-12347',
    timestamp: '2024-03-21 12:45',
    location: 'Zone C',
    type: 'Restricted Area Entry',
    status: 'Resolved',
    assignedDrones: ['DR-004', 'DR-005'],
    priority: 'High',
    description: 'Unauthorized personnel entered restricted zone - Security dispatched'
  },
  {
    id: 'INC-12348',
    timestamp: '2024-03-21 11:30',
    location: 'Zone A',
    type: 'Suspicious Activity',
    status: 'Active',
    assignedDrones: ['DR-006'],
    priority: 'Low',
    description: 'Unusual pattern of movement detected in parking area'
  },
  {
    id: 'INC-12349',
    timestamp: '2024-03-21 10:00',
    location: 'Zone B',
    type: 'Intrusion',
    status: 'Resolved',
    assignedDrones: ['DR-007', 'DR-008'],
    priority: 'Medium',
    description: 'Perimeter breach attempt - Successfully prevented'
  }
];

export const IncidentList = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | Incident['status']>('all');
  const [priorityFilter, setPriorityFilter] = useState<'all' | Incident['priority']>('all');

  const getStatusColor = (status: Incident['status']) => {
    switch (status) {
      case 'Active': return 'badge-error';
      case 'Resolved': return 'badge-success';
      case 'Pending': return 'badge-warning';
      default: return 'badge-ghost';
    }
  };

  const getPriorityColor = (priority: Incident['priority']) => {
    switch (priority) {
      case 'High': return 'text-error';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-success';
      default: return 'text-base-content';
    }
  };

  const filteredIncidents = mockIncidents.filter(incident => {
    if (statusFilter !== 'all' && incident.status !== statusFilter) return false;
    if (priorityFilter !== 'all' && incident.priority !== priorityFilter) return false;
    return true;
  });

  return (
    <div className="container mx-auto bg-base-200 min-h-screen">
      <div className="bg-ai-dark rounded-box shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-ai-green">Incident Monitor</h2>
          <div className="flex gap-4">
            <select 
              className="select select-bordered bg-ai-gray text-ai-text border-ai-light"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | Incident['status'])}
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Resolved">Resolved</option>
              <option value="Pending">Pending</option>
            </select>
            <select 
              className="select select-bordered bg-ai-gray text-ai-text border-ai-light"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value as 'all' | Incident['priority'])}
            >
              <option value="all">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredIncidents.map((incident) => (
            <div key={incident.id} className="card bg-ai-gray border border-ai-light hover:border-ai-green transition-colors">
              <div className="card-body p-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="text-ai-text font-medium">{incident.id}</h3>
                      <p className="text-sm text-ai-text/60">{incident.timestamp}</p>
                    </div>
                    <div>
                      <span className={`badge ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </div>
                  </div>
                  <div className={`font-medium ${getPriorityColor(incident.priority)}`}>
                    {incident.priority} Priority
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-ai-text/60">Location</p>
                    <p className="text-ai-text">{incident.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-ai-text/60">Type</p>
                    <p className="text-ai-text">{incident.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-ai-text/60">Description</p>
                    <p className="text-ai-text">{incident.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-ai-text/60">Assigned Drones</p>
                    <div className="flex gap-2 flex-wrap">
                      {incident.assignedDrones.map((drone) => (
                        <span key={drone} className="badge badge-outline text-ai-green">
                          {drone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost text-ai-text hover:text-ai-green">
                    Details
                  </button>
                  <button className="btn btn-sm btn-primary bg-ai-green hover:bg-ai-green/80 border-none">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};