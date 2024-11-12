type MissionType = 'surveillance' | 'delivery' | 'inspection' | 'mapping' | 'emergency';
type MissionPriority = 'low' | 'medium' | 'high' | 'critical';
 
export interface Mission {
   name: string;
   area: string;
   type: MissionType;
   priority: MissionPriority;
   dronesRequired: number;
   duration: number;
   batteryOptimization: boolean;
   aiDecisions: boolean;
   notes: string;
   startDateTime: string;
 }