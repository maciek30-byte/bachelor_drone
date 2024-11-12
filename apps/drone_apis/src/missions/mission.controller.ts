import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { MissionService } from './mission.service';
import { CreateMissionDto } from './dto/create-missions.dto';

@ApiTags('Missions')
@Controller('missions')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

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