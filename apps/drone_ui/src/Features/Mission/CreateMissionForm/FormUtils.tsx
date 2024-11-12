interface FormControlProps {
    label: string;
    hint?: string;
    children: React.ReactNode;
  }
  
  export const FormControl = ({ label, hint, children }: FormControlProps) => (
    <div className="form-control w-full gap-2 mb-4 hover:bg-base-200 p-2 rounded-lg transition-colors">
      <div className="flex justify-between items-center">
        <div>
          <div className="label-text font-medium">{label}</div>
          {hint && <div className="label-text-alt text-sm opacity-70">{hint}</div>}
        </div>
        {children}
      </div>
    </div>
  );

  export interface SelectOption {
    value: string;
    label: string;
    className?: string;
  }
  
  interface FormSelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
  }
  
  export const FormSelect = ({
    options,
    value,
    onChange,
    placeholder = "Select option",
    required = false,
    className = "select-bordered w-full"
  }: FormSelectProps) => {
    return (
      <select
        className={`select ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={option.className}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  };