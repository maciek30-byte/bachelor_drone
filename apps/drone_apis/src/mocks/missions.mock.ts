import { Mission, MissionPriority } from "../missions/mission.types";
import { MissionType } from "../missions/mission.types";

export const mockMissions: Mission[] = [
  {
    id: '1',
    name: 'Downtown Surveillance',
    area: 'City Center',
    type: MissionType.SURVEILLANCE,
    priority: MissionPriority.HIGH,
    dronesRequired: 2,
    startDateTime: '2024-03-20T10:00:00Z',
    duration: '120',
    batteryOptimization: true,
    aiDecisions: true,
    notes: 'Regular surveillance of downtown area',
    createdAt: '2024-03-19T08:00:00Z'
  },
  {
    id: '2',
    name: 'Emergency Response',
    area: 'Industrial Zone',
    type: MissionType.EMERGENCY,
    priority: MissionPriority.CRITICAL,
    dronesRequired: 3,
    startDateTime: '2024-03-21T15:00:00Z',
    duration: '60',
    batteryOptimization: true,
    aiDecisions: true,
    notes: 'Emergency response mission',
    createdAt: '2024-03-19T09:30:00Z'
  },
  {
    id: '3',
    name: 'Package Delivery',
    area: 'Residential Area',
    type: MissionType.DELIVERY,
    priority: MissionPriority.MEDIUM,
    dronesRequired: 1,
    startDateTime: '2024-03-22T09:00:00Z',
    duration: '30',
    batteryOptimization: false,
    aiDecisions: true,
    notes: 'Regular delivery route',
    createdAt: '2024-03-19T10:15:00Z'
  }
];