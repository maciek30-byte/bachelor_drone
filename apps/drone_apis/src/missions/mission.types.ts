
 type MissionType = 'surveillance' | 'delivery' | 'inspection' | 'mapping' | 'emergency';
 type MissionPriority = 'low' | 'medium' | 'high' | 'critical';
  
export interface Mission {
    id: string;
    name: string;
    area: string;
    type: MissionType;
    priority: MissionPriority;
    dronesRequired: number;
    startDateTime: string;
    duration: string;
    batteryOptimization: boolean;
    aiDecisions: boolean;
    notes: string;
    createdAt: string;
  }