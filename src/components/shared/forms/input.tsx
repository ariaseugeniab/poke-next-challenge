import { XIcon } from 'lucide-react';
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from 'react-hook-form';

interface InputProps<T extends FieldValues, K extends string> {
  className?: string;
  isClearable?: boolean;
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  onChange?: (value: K) => void;
  onClear?: () => void;
}

const Input = <T extends FieldValues, K extends string>({
  className,
  control,
  name,
  label,
  placeholder,
  isClearable,
  onChange,
  onClear,
  ...props
}: InputProps<T, K>) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState }) => {
      const hasError = !!fieldState.error;
      const inputId = `input-${name}`;
      const errorId = hasError ? `${inputId}-error` : undefined;
      const describedBy = errorId ? errorId : undefined;

      return (
        <div className="input-group relative flex items-center w-full">
          {label && (
            <label htmlFor={inputId} className="form-label sr-only">
              {label}
            </label>
          )}

          <input
            id={inputId}
            className={`form-control 
              flex h-8 w-full rounded-md border-0 bg-transparent px-3 py-2 text-sm transition-colors 
              disabled:cursor-not-allowed file:border-0 file:bg-transparent file:font-medium file:text-sm 
              placeholder:text-muted-foreground disabled:opacity-50
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500
              ${hasError ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-300'}
              ${className ?? ''}`}
            placeholder={placeholder}
            aria-label={label || placeholder}
            aria-describedby={describedBy}
            aria-invalid={hasError}
            {...field}
            onChange={(e) => {
              field.onChange(e.target.value);
              onChange?.(e.target.value as K);
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
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded-md hover:bg-gray-100 transition-colors"
                aria-label={`Clear ${label || 'input'}`}
                tabIndex={0}
              >
                <XIcon className="w-4 h-4" />
              </button>
            </div>
          )}

          {hasError && (
            <div
              id={errorId}
              role="alert"
              aria-live="polite"
              className="sr-only"
            >
              {fieldState.error?.message}
            </div>
          )}
        </div>
      );
    }}
  />
);

export default Input;
