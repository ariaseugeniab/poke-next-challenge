'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/forms/form';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/shared/forms/select';
import { type ReactNode, useRef } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

const SelectField = <T extends FieldValues, K extends string>({
  name,
  label,
  children,
  classNameTrigger,
  className,
  placeholder,
  control,
  onChange,
  disabled,
  hiddenLabel = false,
}: {
  control: Control<T>;
  name: Path<T>;
  children: ReactNode;
  label?: ReactNode;
  classNameTrigger?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value?: K) => void;
  disabled?: boolean;
  hiddenLabel?: boolean;
}) => {
  const lastSelectedValue = useRef<string | undefined>(
    control._defaultValues[name]
  );
  const preventReset = useRef(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const handleOpenChange = (open: boolean) => {
          if (!open && field.value) {
            if (
              field.value === lastSelectedValue.current &&
              !preventReset.current
            ) {
              field.onChange(undefined);
              onChange?.(undefined);
              return;
            }
          }
          preventReset.current = false;
        };

        const handleValueChange = (value?: string) => {
          field.onChange(value === '' ? undefined : value);
          onChange?.(value as K);
          lastSelectedValue.current = value;
          preventReset.current = true;
        };

        return (
          <FormItem className={className}>
            {label && (
              <FormLabel className={hiddenLabel ? 'sr-only' : ''}>
                {label}
              </FormLabel>
            )}

            <FormControl>
              <Select
                onOpenChange={handleOpenChange}
                onValueChange={handleValueChange}
                value={field.value ?? ''}
              >
                <SelectTrigger
                  className={classNameTrigger}
                  disabled={disabled}
                  size="sm"
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent
                  onPointerDownOutside={() => {
                    preventReset.current = true;
                  }}
                  className="overflow-y-auto max-h-[300px]"
                >
                  {children}
                </SelectContent>
              </Select>
            </FormControl>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default SelectField;
