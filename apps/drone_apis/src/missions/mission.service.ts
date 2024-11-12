import { Injectable, Logger } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-missions.dto';

@Injectable()
export class MissionService {
  private readonly logger = new Logger(MissionService.name);

  async createMission(createMissionDto: CreateMissionDto) {
    // Log the received mission data
    this.logger.log('Received new mission request:');
    this.logger.log(JSON.stringify(createMissionDto, null, 2));

    // For now, just return the received data
    return {
      message: 'Mission received successfully',
      data: createMissionDto
    };
  }
}