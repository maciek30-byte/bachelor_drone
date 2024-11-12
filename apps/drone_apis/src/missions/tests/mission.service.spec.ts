import { Test, TestingModule } from '@nestjs/testing';
import { MissionsService } from '../mission.service';
import { CreateMissionDto } from '../dto/create-missions.dto';
import { NotFoundException } from '@nestjs/common';

describe('MissionsService', () => {
  let service: MissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionsService],
    }).compile();

    service = module.get<MissionsService>(MissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a mission', () => {
      const dto: CreateMissionDto = {
        name: 'Test Mission',
        area: 'Test Area',
        type: 'surveillance',
        priority: 'high',
        dronesRequired: 2,
        startDateTime: '2024-03-20T10:00:00Z',
        duration: '2h',
        batteryOptimization: true,
        aiDecisions: true,
        notes: 'Test notes'
      };

      const result = service.create(dto);

      expect(result).toEqual({
        id: '1',
        ...dto,
        createdAt: expect.any(String)
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of missions', () => {
      const result = service.findAll();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('findOne', () => {
    it('should throw NotFoundException when mission not found', () => {
      expect(() => service.findOne('999')).toThrow(NotFoundException);
    });
  });
}); 