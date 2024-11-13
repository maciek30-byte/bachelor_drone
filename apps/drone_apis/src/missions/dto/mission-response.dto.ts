import { ApiProperty } from '@nestjs/swagger';
import { Mission, MissionType, MissionPriority } from '../mission.types';

export class MissionResponseDto implements Mission {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'Downtown Surveillance' })
  name: string;

  @ApiProperty({ example: 'City Center' })
  area: string;

  @ApiProperty({ 
    enum: MissionType,
    example: MissionType.SURVEILLANCE 
  })
  type: MissionType;

  @ApiProperty({ 
    enum: MissionPriority,
    example: MissionPriority.HIGH 
  })
  priority: MissionPriority;

  @ApiProperty({ example: 2 })
  dronesRequired: number;

  @ApiProperty({ example: '2024-03-20T10:00:00Z' })
  startDateTime: string;

  @ApiProperty({ example: '120' })
  duration: string;

  @ApiProperty({ example: true })
  batteryOptimization: boolean;

  @ApiProperty({ example: true })
  aiDecisions: boolean;

  @ApiProperty({ example: 'Regular surveillance of downtown area' })
  notes: string;

  @ApiProperty({ example: '2024-03-19T08:00:00Z' })
  createdAt: string;
} 