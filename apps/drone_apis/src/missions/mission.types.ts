export enum MissionType {
  SURVEILLANCE = 'surveillance',
  DELIVERY = 'delivery',
  INSPECTION = 'inspection',
  MAPPING = 'mapping',
  EMERGENCY = 'emergency'
}

export enum MissionPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

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