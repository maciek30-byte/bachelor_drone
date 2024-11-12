import { Test, TestingModule } from '@nestjs/testing';
import { MissionsController } from '../mission.controller';
import { MissionsService } from '../mission.service';
import { CreateMissionDto } from '../dto/create-missions.dto';

describe('MissionsController', () => {
  let controller: MissionsController;
  let service: MissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MissionsController],
      providers: [MissionsService],
    }).compile();

    controller = module.get<MissionsController>(MissionsController);
    service = module.get<MissionsService>(MissionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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

      const result = controller.create(dto);
      expect(result).toEqual({
        id: expect.any(String),
        ...dto,
        createdAt: expect.any(String)
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of missions', () => {
      const result = controller.findAll();
      expect(Array.isArray(result)).toBe(true);
    });
  });
}); 