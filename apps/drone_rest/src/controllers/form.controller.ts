import { Request, Response } from 'express';
import { missionFormSchema, MissionFormType } from '@libs/ZOD_SCHEMAS';

export const createMission = async (req: Request, res: Response) => {
  try {
    // Validate request body against schema
    const validatedData = missionFormSchema.parse(req.body);
    
    // Here you would typically save to database
    // For now, we'll just return the validated data
    res.status(201).json({
      status: 'success',
      data: validatedData,
    });
  } catch (error) {
    // Error handling is done by middleware
    throw error;
  }
};