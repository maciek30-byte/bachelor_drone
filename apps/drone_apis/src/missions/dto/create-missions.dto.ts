import { IsString, IsNumber, IsBoolean, IsDateString, IsNotEmpty, Min, Max, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
  

enum MissionType {
  SURVEILLANCE = 'surveillance',
  DELIVERY = 'delivery',
  INSPECTION = 'inspection',
  MAPPING = 'mapping',
  EMERGENCY = 'emergency'
}

enum MissionPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}



export class CreateMissionDto {
  @ApiProperty({ description: 'Mission name' })
  name: string;

  @ApiProperty({ description: 'Mission area' })
  area: string;

  @ApiProperty({
    enum: ['surveillance', 'delivery', 'inspection', 'mapping', 'emergency'],
    description: 'Type of mission'
  })
  type: MissionType;

  @ApiProperty({
    enum: ['low', 'medium', 'high', 'critical'],
    description: 'Mission priority level'
  })
  priority: MissionPriority;

  @ApiProperty({ description: 'Number of drones required' })
  dronesRequired: number;

  @ApiProperty({ description: 'Mission duration in minutes' })
  duration: number;

  @ApiProperty({ description: 'Enable battery optimization' })
  batteryOptimization: boolean;

  @ApiProperty({ description: 'Enable AI-assisted decisions' })
  aiDecisions: boolean;

  @ApiProperty({ description: 'Additional mission notes' })
  notes: string;

  @ApiProperty({ description: 'Mission start date and time' })
  startDateTime: string;
}