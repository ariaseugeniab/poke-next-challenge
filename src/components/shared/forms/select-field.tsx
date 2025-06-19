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
import type { ReactNode } from 'react';
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
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Select
              onOpenChange={field.onChange}
              onValueChange={onChange}
              value={field.value ?? ''}
            >
              <SelectTrigger className={classNameTrigger} disabled={disabled}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent className="overflow-y-auto max-h-[300px]">
                {children}
              </SelectContent>
            </Select>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
