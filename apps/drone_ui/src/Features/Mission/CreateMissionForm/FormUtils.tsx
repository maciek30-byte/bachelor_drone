interface FormControlProps {
    label: string;
    hint?: string;
    children: React.ReactNode;
  }
  
  export const FormControl = ({ label, hint, children }: FormControlProps) => (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">{label}</span>
        {hint && <span className="label-text-alt text-info">{hint}</span>}
      </label>
      {children}
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