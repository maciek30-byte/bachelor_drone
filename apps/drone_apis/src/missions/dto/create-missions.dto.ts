import { IsString, IsNumber, IsBoolean, IsDateString, IsNotEmpty, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

//@TODO narrow this typee, find god place for types//

export interface Mission {
  id: string;
  name: string;
  area: string;
  type: string;
  priority: string;
}

export class CreateMissionDto {
  @ApiProperty({ example: 'Coastal Survey', description: 'Name of the mission' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'North Coast', description: 'Area of operation' })
  @IsString()
  @IsNotEmpty()
  area: string;

  @ApiProperty({ example: 'Surveillance', description: 'Type of mission' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 'High', description: 'Mission priority level' })
  @IsString()
  @IsNotEmpty()
  priority: string;

  @ApiProperty({ example: 2, description: 'Number of drones required' })
  @IsNumber()
  @Min(1)
  @Max(10)
  dronesRequired: number;

  @ApiProperty({ example: '2024-03-20T10:00:00Z', description: 'Mission start date and time' })
  @IsDateString()
  startDateTime: string;

  @ApiProperty({ example: '2h', description: 'Expected mission duration' })
  @IsString()
  @IsNotEmpty()
  duration: string;

  @ApiProperty({ example: true, description: 'Enable battery optimization' })
  @IsBoolean()
  batteryOptimization: boolean;

  @ApiProperty({ example: true, description: 'Enable AI-assisted decisions' })
  @IsBoolean()
  aiDecisions: boolean;

  @ApiProperty({ example: 'Avoid residential areas', description: 'Additional mission notes' })
  @IsString()
  notes: string;
}