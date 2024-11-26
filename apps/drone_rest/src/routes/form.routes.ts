import { Router } from 'express';
import { createMission } from '../controllers/form.controller';

export const formRouter = Router();

// POST /api/form/mission - Create new mission
formRouter.post('/mission', createMission);