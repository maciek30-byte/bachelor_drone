import { MissionFormType } from '@libs/ZOD_SCHEMAS';
import { useForm } from '../../../hooks/useForm';
import { FirstStep } from './FirstStep';
import { INITIAL_FORM_VALUES } from './optionsConfig';
import { ButtonsSection } from './sections/ButtonsSection';
import { HeaderSection } from './sections/HeaderSection';

export type MissionFormData = MissionFormType;

export const FormWrapper = (): JSX.Element => {
  const {
    values,
    handleSubmit,
    handleCancel,
    setValues,
    currentStep,
  } = useForm<MissionFormData>({
    initialValues: INITIAL_FORM_VALUES,
    navigatePath: '/missions',
    currentStep: 1,
  });

  const handleToNextStep = () => {
    console.log('handleToNextStep');
  };

  return (
    <div className="h-[calc(100vh-8rem)] overflow-y-auto px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <HeaderSection />
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <FirstStep
                  missionData={values}
                  setMissionData={setValues}
                  showMap={false}
                  setShowMap={() => {}}
                />
              )}
              <ButtonsSection
                handleCancel={handleCancel}
                handleSubmit={handleToNextStep}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
