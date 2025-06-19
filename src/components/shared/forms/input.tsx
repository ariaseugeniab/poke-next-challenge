import { XIcon } from 'lucide-react';
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  className?: string;
  isClearable?: boolean;
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

const Input = <T extends FieldValues>({
  className,
  control,
  name,
  label,
  placeholder,
  isClearable,
  onChange,
  onClear,
  ...props
}: InputProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <div className="input-group relative flex items-center">
        {label && (
          <label htmlFor={name} className="form-label">
            {label}
          </label>
        )}

        <input
          id={name}
          className={`form-control 
            flex h-10 w-full rounded-md border-0 bg-transparent px-3 py-1 text-sm transition-colors 
            disabled:cursor-not-allowed file:border-0 file:bg-transparent file:font-medium file:text-sm 
            placeholder:text-muted-foreground disabled:opacity-50 
            focus-visible:outline-none focus-visible:ring-0
            ${className ?? ''}`}
          placeholder={placeholder}
          {...field}
          onChange={(e) => {
            field.onChange(e);
            onChange?.(e);
          }}
          {...props}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {isClearable && field.value && (
          <div className="relative h-10">
            <button
              type="button"
              onClick={() => {
                field.onChange('');
                onClear?.();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    )}
  />
);

export default Input;
