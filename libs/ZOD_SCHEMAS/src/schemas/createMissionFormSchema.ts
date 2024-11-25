import { z } from 'zod';

export const missionFormSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  area: z.enum(['zone-a', 'zone-b', 'zone-c'], {
    required_error: "Area must be selected",
    invalid_type_error: "Area must be one of: zone-a, zone-b, zone-c",
  }),
  type: z.enum(['surveillance', 'patrol', 'delivery'], {
    required_error: "Mission type must be selected",
  }),
  priority: z.enum(['high', 'medium', 'low'], {
    required_error: "Priority must be selected",
  }),
  startDateTime: z.string({
    required_error: "Start date and time is required",
  }).regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, "Invalid date/time format"),
  duration: z.number({
    required_error: "Duration is required",
    invalid_type_error: "Duration must be a number",
  }).positive("Duration must be positive"), 
});

export type MissionFormType = z.infer<typeof missionFormSchema>;

