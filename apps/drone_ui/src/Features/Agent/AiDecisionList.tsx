import { useState } from 'react';

interface AIDecision {
  id: string;
  timestamp: string;
  actionType: 'Deploy Additional Drone' | 'Change Patrol Route' | 'Increase Surveillance' | 'Request Human Intervention';
  priority: 'High' | 'Medium' | 'Low';
  reasoning: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Implemented';
  confidence: number;
  relatedArea: string;
}

const mockDecisions: AIDecision[] = [
  {
    id: 'DEC-2025',
    timestamp: '2024-03-21 15:30',
    actionType: 'Deploy Additional Drone',
    priority: 'High',
    reasoning: 'Multiple unauthorized movements detected in Zone B, current coverage insufficient',
    status: 'Pending',
    confidence: 92,
    relatedArea: 'Zone B'
  },
  {
    id: 'DEC-2024',
    timestamp: '2024-03-21 15:15',
    actionType: 'Change Patrol Route',
    priority: 'Medium',
    reasoning: 'Weather conditions affecting visibility in northern sector',
    status: 'Approved',
    confidence: 87,
    relatedArea: 'Zone A'
  }
];

export const AIDecisionsList = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | AIDecision['status']>('all');
  const [priorityFilter, setPriorityFilter] = useState<'all' | AIDecision['priority']>('all');

  const getPriorityColor = (priority: AIDecision['priority']) => {
    switch (priority) {
      case 'High': return 'text-error';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-info';
    }
  };

  const getStatusColor = (status: AIDecision['status']) => {
    switch (status) {
      case 'Pending': return 'badge-warning';
      case 'Approved': return 'badge-info';
      case 'Rejected': return 'badge-error';
      case 'Implemented': return 'badge-success';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-success';
    if (confidence >= 70) return 'text-warning';
    return 'text-error';
  };

  const filteredDecisions = mockDecisions.filter(decision => {
    if (statusFilter !== 'all' && decision.status !== statusFilter) return false;
    if (priorityFilter !== 'all' && decision.priority !== priorityFilter) return false;
    return true;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-end gap-2 mb-4">
        <select 
          className="select select-sm select-bordered bg-ai-gray text-ai-text border-ai-light"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as 'all' | AIDecision['status'])}
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Implemented">Implemented</option>
        </select>
        <select 
          className="select select-sm select-bordered bg-ai-gray text-ai-text border-ai-light"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value as 'all' | AIDecision['priority'])}
        >
          <option value="all">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2">
        {filteredDecisions.map((decision) => (
          <div key={decision.id} 
               className="card bg-ai-gray border border-ai-light hover:border-ai-green transition-colors">
            <div className="card-body p-3">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-start">
                  <div>
                    <h3 className="text-ai-text font-medium">{decision.id}</h3>
                    <p className="text-sm text-ai-text/60">{decision.timestamp}</p>
                  </div>
                  <div>
                    <span className={`badge badge-sm ${getStatusColor(decision.status)}`}>
                      {decision.status}
                    </span>
                  </div>
                </div>
                <div className={`font-medium ${getPriorityColor(decision.priority)}`}>
                  {decision.priority} Priority
                </div>
              </div>

              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-ai-text font-medium">{decision.actionType}</span>
                  <span className={`text-sm ${getConfidenceColor(decision.confidence)}`}>
                    Confidence: {decision.confidence}%
                  </span>
                </div>
                <p className="text-sm text-ai-text/70">{decision.reasoning}</p>
                <p className="text-sm text-ai-text/60">Area: {decision.relatedArea}</p>
              </div>

              <div className="card-actions justify-end mt-2">
                <button className="btn btn-xs btn-ghost text-ai-text hover:text-ai-green">
                  Details
                </button>
                <button className="btn btn-xs btn-primary bg-ai-green hover:bg-ai-green/80 border-none">
                  Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};