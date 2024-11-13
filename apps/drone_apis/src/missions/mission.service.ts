import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-missions.dto';
import { Mission } from './mission.types';
import { mockMissions } from '../mocks/missions.mock';

@Injectable()
export class MissionService {
  private readonly logger = new Logger(MissionService.name);
  private missions: Mission[] = mockMissions;

  async getAllMissions(): Promise<Mission[]> {
    return this.missions;
  }

  async getMissionById(id: string): Promise<Mission> {
    const mission = this.missions.find(m => m.id === id);
    if (!mission) {
      throw new NotFoundException(`Mission with ID ${id} not found`);
    }
    return mission;
  }

  async createMission(createMissionDto: CreateMissionDto) {
    this.logger.log('Received new mission request:');
    this.logger.log(JSON.stringify(createMissionDto, null, 2));

    return {
      message: 'Mission received successfully',
      data: createMissionDto
    };
  }
}
