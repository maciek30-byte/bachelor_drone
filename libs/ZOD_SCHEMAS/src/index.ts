import { z } from 'zod';
import { missionFormSchema } from './schemas/createMissionFormSchema';

export type MissionFormType = z.infer<typeof missionFormSchema>;
export { missionFormSchema };
