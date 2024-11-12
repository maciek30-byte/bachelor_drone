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
  @ApiProperty({
    description: 'Mission name',
    example: 'City Center Surveillance',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Mission area or location',
    example: 'Downtown District',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  area: string;

  @ApiProperty({
    enum: MissionType,
    description: 'Type of mission',
    example: MissionType.SURVEILLANCE,
    required: true
  })
  @IsEnum(MissionType)
  type: MissionType;

  @ApiProperty({
    enum: MissionPriority,
    description: 'Mission priority level',
    example: MissionPriority.HIGH,
    required: true
  })
  @IsEnum(MissionPriority)
  priority: MissionPriority;

  @ApiProperty({
    description: 'Number of drones required for the mission',
    minimum: 1,
    example: 2,
    required: true
  })
  @IsNumber()
  @Min(1)
  dronesRequired: number;

  @ApiProperty({
    description: 'Mission duration in minutes',
    minimum: 1,
    example: 30,
    required: true
  })
  @IsNumber()
  @Min(1)
  duration: number;

  @ApiProperty({
    description: 'Enable battery optimization for the mission',
    example: true,
    default: false
  })
  @IsBoolean()
  batteryOptimization: boolean;

  @ApiProperty({
    description: 'Enable AI-assisted decision making',
    example: true,
    default: false
  })
  @IsBoolean()
  aiDecisions: boolean;

  @ApiProperty({
    description: 'Additional mission notes or instructions',
    example: 'Regular surveillance of downtown area with focus on main streets',
    required: false
  })
  @IsString()
  notes: string;

  @ApiProperty({
    description: 'Mission start date and time in ISO format',
    example: '2024-03-20T10:00:00Z',
    required: true
  })
  @IsDateString()
  startDateTime: string;
}