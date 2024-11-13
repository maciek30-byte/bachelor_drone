import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { MissionService } from './mission.service';
import { CreateMissionDto } from './dto/create-missions.dto';
import { MissionResponseDto } from './dto/mission-response.dto';
import { Mission } from './mission.types';

@ApiTags('Missions')
@Controller('missions')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Get()
  @ApiOperation({ 
    summary: 'Get all missions',
    description: 'Retrieves a list of all drone missions'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'List of all missions retrieved successfully',
    type: [MissionResponseDto]
  })
  async getAllMissions(): Promise<Mission[]> {
    return this.missionService.getAllMissions();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Get mission by ID',
    description: 'Retrieves a specific mission by its ID'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Mission found successfully',
    type: MissionResponseDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Mission not found'
  })
  async getMissionById(@Param('id') id: string): Promise<Mission> {
    return this.missionService.getMissionById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create new mission',
    description: 'Creates a new drone mission with specified parameters'
  })
  @ApiBody({ type: CreateMissionDto })
  @ApiResponse({ 
    status: 201, 
    description: 'Mission created successfully',
    type: CreateMissionDto 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Bad request - Invalid mission data provided' 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error' 
  })
  async createMission(@Body() createMissionDto: CreateMissionDto) {
    return this.missionService.createMission(createMissionDto);
  }
}