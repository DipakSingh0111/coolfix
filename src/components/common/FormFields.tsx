import type { ReactNode } from 'react';
import Icon from '@/components/Icon';

export const inputClass =
  'w-full rounded-md border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-[13px] text-gray-800 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]';

type FieldProps = {
  label: string;
  required?: boolean;
  icon: string;
  children: ReactNode;
  className?: string;
};

export function Field({ label, required, icon, children, className = '' }: FieldProps) {
  return (
    <label className={`block space-y-1.5 ${className}`}>
      <span className="text-xs font-bold text-[#0b2a5b]">
        {label} {required && <span className="text-[#ff6b00]">*</span>}
      </span>
      <span className="relative block">
        <Icon name={icon} className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-gray-400" />
        {children}
      </span>
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  required?: boolean;
  icon: string;
  name: string;
  placeholder: string;
  options: string[];
  className?: string;
};

export function SelectField({ label, required, icon, name, placeholder, options, className }: SelectFieldProps) {
  return (
    <Field label={label} required={required} icon={icon} className={className}>
      <select name={name} defaultValue="" required={required} className={`${inputClass} appearance-none pr-8 text-gray-500`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" className="pointer-events-none absolute right-2.5 top-3 h-4 w-4 text-gray-400" />
    </Field>
  );
}
