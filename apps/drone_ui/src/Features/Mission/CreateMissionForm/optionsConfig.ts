import { Mission } from "../missionTypes";
import { SelectOption } from "./FormUtils";

export const INITIAL_FORM_VALUES: Mission = {
  name: '',
  area: '',
  type: 'mapping',
  priority: 'low',
  dronesRequired: 1,
  duration: 0,
  batteryOptimization: false,
  aiDecisions: false,
  notes: '',
  startDateTime: '',
} ;

export const missionTypeSelectOptions: SelectOption[] = [
    { value: 'surveillance', label: 'Surveillance' },
    { value: 'patrol', label: 'Routine Patrol' },
    { value: 'delivery', label: 'Delivery' },
  ];
  
  export const missionPrioritySelectOptions: SelectOption[] = [
    { value: 'low', label: 'Low', className: 'text-success' },
    { value: 'medium', label: 'Medium', className: 'text-warning' },
    { value: 'high', label: 'High', className: 'text-error  ' },
  ];