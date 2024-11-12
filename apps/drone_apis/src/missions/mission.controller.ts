import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMissionDto } from './dto/create-missions.dto';
import { MissionsService } from './mission.service';
@ApiTags('missions')
@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new mission' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Mission created successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input' })
  create(@Body() createMissionDto: CreateMissionDto) {
    console.log('Creating mission:', createMissionDto);
    return this.missionsService.create(createMissionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all missions' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all missions' })
  findAll() {
    return this.missionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a mission by id' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return the mission' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Mission not found' })
  findOne(@Param('id') id: string) {
    return this.missionsService.findOne(id);
  }
}