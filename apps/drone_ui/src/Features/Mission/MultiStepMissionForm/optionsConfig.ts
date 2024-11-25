import { SelectOption } from "./FormUtils";
import { MissionFormType } from "@libs/ZOD_SCHEMAS";

export const INITIAL_FORM_VALUES: MissionFormType = {
  name: "",
  area: "zone-a",
  type: "surveillance",
  priority: "low",
  duration: 0,
  startDateTime: '',
}

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