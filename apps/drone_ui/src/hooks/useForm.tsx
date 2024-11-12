import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormOptions<T> {
  initialValues: T;
  navigatePath?: string;
}

export function useForm<T>({ initialValues, navigatePath }: FormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const checked =
      (e.target as HTMLInputElement).type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : undefined;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', values);
    resetForm();
    // navigate(navigatePath);
  };

  const resetForm = () => setValues(initialValues);

  const handleCancel = () => {
    if (
      window.confirm(
        'Are you sure you want to cancel? All progress will be lost.',
      )
    ) {
      resetForm();
      navigatePath ? navigate(navigatePath) : null;
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleCancel,
    setValues,
    resetForm,
  };
}
