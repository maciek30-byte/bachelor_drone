import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMissionDto, Mission } from './dto/create-missions.dto';

@Injectable()
export class MissionsService {
  private missions: Mission[] = [];

  create(createMissionDto: CreateMissionDto) {
    const mission = {
      id: (this.missions.length + 1).toString(),
      ...createMissionDto,
      createdAt: new Date().toISOString(),
    };
    this.missions.push(mission);
    return mission;
  }

  findAll() {
    return this.missions;
  }

  findOne(id: string) {
    const mission = this.missions.find(m => m.id === id);
    if (!mission) {
      throw new NotFoundException(`Mission with ID ${id} not found`);
    }
    return mission;
  }
}   