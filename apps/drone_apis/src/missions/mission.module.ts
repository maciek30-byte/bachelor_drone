import { Module } from '@nestjs/common';
import { MissionsController } from './mission.controller';
import { MissionsService } from './mission.service';

@Module({
  controllers: [MissionsController],
  providers: [MissionsService],
})
export class MissionsModule {}