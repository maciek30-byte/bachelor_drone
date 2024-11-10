import { useState } from 'react';

interface Objective {
  id: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Completed' | 'Pending';
  priority: 'High' | 'Medium' | 'Low';
  progress: number;
  assignedDrones: number;
}

const mockObjectives: Objective[] = [
  {
    id: 'OBJ-101',
    title: 'Secure Perimeter Surveillance',
    description: 'Maintain continuous monitoring of facility perimeter with optimal drone positioning',
    status: 'In Progress',
    priority: 'High',
    progress: 75,
    assignedDrones: 4
  },
  {
    id: 'OBJ-102',
    title: 'Battery Optimization',
    description: 'Implement AI-driven battery management for extended operation time',
    status: 'Pending',
    priority: 'Medium',
    progress: 0,
    assignedDrones: 0
  },
  {
    id: 'OBJ-103',
    title: 'Coverage Gap Analysis',
    description: 'Identify and eliminate surveillance blind spots in Zone B',
    status: 'Completed',
    priority: 'High',
    progress: 100,
    assignedDrones: 2
  },
  {
    id: 'OBJ-104',
    title: 'Weather Adaptation Protocol',
    description: 'Adjust drone patterns based on current weather conditions',
    status: 'In Progress',
    priority: 'Low',
    progress: 45,
    assignedDrones: 1
  },
  {
    id: 'OBJ-105',
    title: 'Emergency Response Readiness',
    description: 'Maintain standby drones for rapid incident response',
    status: 'In Progress',
    priority: 'High',
    progress: 90,
    assignedDrones: 3
  }
];

export const KeyObjectives = () => {
  const [priorityFilter, setPriorityFilter] = useState<'all' | Objective['priority']>('all');

  const getStatusColor = (status: Objective['status']) => {
    switch (status) {
      case 'In Progress': return 'badge-warning';
      case 'Completed': return 'badge-success';
      case 'Pending': return 'badge-ghost';
    }
  };

  const getPriorityColor = (priority: Objective['priority']) => {
    switch (priority) {
      case 'High': return 'text-error';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-info';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'progress-success';
    if (progress >= 40) return 'progress-warning';
    return 'progress-error';
  };

  const filteredObjectives = mockObjectives.filter(objective => 
    priorityFilter === 'all' || objective.priority === priorityFilter
  );

  return (
    <div className="bg-ai-dark p-4 rounded-box h-min">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-ai-green">Key Objectives</h2>
        <select 
          className="select select-bordered select-sm bg-ai-gray text-ai-text border-ai-light"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value as 'all' | Objective['priority'])}
        >
          <option value="all">All Priorities</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>

      <div className="overflow-x-auto h-min">
        <div className="flex gap-4 min-w-full pb-2">
          {filteredObjectives.map((objective) => (
            <div key={objective.id} 
                 className="card bg-ai-gray border border-ai-light hover:border-ai-green transition-colors w-[350px] flex-shrink-0">
              <div className="card-body p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-ai-text font-medium flex items-center gap-2">
                      <span className="text-ai-green">🚁</span>
                      {objective.title}
                    </h3>
                    <p className="text-xs text-ai-text/60">{objective.id}</p>
                  </div>
                  <span className={`badge badge-sm ${getStatusColor(objective.status)}`}>
                    {objective.status}
                  </span>
                </div>

                <p className="text-sm text-ai-text/70 mt-2">{objective.description}</p>

                <div className="mt-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-ai-text/60">Progress</span>
                    <span className={`text-xs ${getPriorityColor(objective.priority)}`}>
                      {objective.priority} Priority
                    </span>
                  </div>
                  <progress 
                    className={`progress ${getProgressColor(objective.progress)} w-full`} 
                    value={objective.progress} 
                    max="100"
                  ></progress>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-ai-text/60">
                    Drones Assigned: {objective.assignedDrones}
                  </span>
                  <button className="btn btn-xs btn-ghost text-ai-text hover:text-ai-green">
                    Details
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