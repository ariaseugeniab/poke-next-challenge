'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { z } from 'zod';

interface UseQueryParamsOptions<T extends z.ZodType> {
  debouncedValues?: Array<keyof z.infer<T>>;
}

/**
 * This hook manages query parameters in the URL, allowing for both
 * immediate updates and debounced updates where the URL update is delayed.
 *
 * @example
 *
 * const schema = z.object({
 *   search: z.string().optional(),
 *   page: z.number().optional(),
 * });
 *
 * const { queryParams, setQueryParams } = useQueryParams(schema, {
 *   debouncedValues: ['search'],
 * });
 *
 * setQueryParams({ page: 2 });
 * setQueryParams({ search: 'search text' });
 *
 */
export const useQueryParams = <T extends z.ZodType>(
  schema: T,
  options: UseQueryParamsOptions<T> = {}
) => {
  type QueryParams = z.infer<T>;

  const { debouncedValues = [] } = options;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [params, setParams] = useState<QueryParams>(() => {
    const initialParams = Object.fromEntries(
      Array.from(searchParams.entries()).map(([key, value]) => [
        key,
        value ?? undefined,
      ])
    );

    return schema.parse(initialParams);
  });

  const debounceTimers = useRef<Record<string, NodeJS.Timeout | null>>({});

  const latestParams = useRef(params);

  const updateQueryParams = useCallback(
    (updatedParams: Partial<QueryParams>) => {
      const validatedParams = schema.parse({
        ...latestParams.current,
        ...updatedParams,
      });

      // Create a new URLSearchParams instance based on current parameters
      const newSearchParams = new URLSearchParams(searchParams.toString());

      // Update the query parameters in the URL
      for (const key in validatedParams) {
        const value = validatedParams[key];

        if (value != null && value !== '') {
          newSearchParams.set(key, String(value));
        } else {
          newSearchParams.delete(key);
        }
      }

      router.replace(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });

      latestParams.current = validatedParams;
    },
    [pathname, router, searchParams, schema]
  );

  const setQueryParams = useCallback(
    (newParams: Partial<QueryParams>) => {
      setParams((prev) => ({ ...prev, ...newParams }));

      const debouncedParams: Partial<QueryParams> = {};
      const immediateUpdateParams: Partial<QueryParams> = {};

      // Separate immediate and debounced params
      for (const key in newParams) {
        if (debouncedValues.includes(key)) {
          debouncedParams[key] = newParams[key];
        } else {
          immediateUpdateParams[key] = newParams[key];
        }
      }

      // Immediately update non-debounced params
      if (Object.keys(immediateUpdateParams).length > 0) {
        updateQueryParams(immediateUpdateParams);
      }

      // Handle debounced params
      for (const key in debouncedParams) {
        const stringKey = z.string().parse(key);

        if (debounceTimers.current[stringKey]) {
          clearTimeout(debounceTimers.current[stringKey]);
        }

        debounceTimers.current[stringKey] = setTimeout(() => {
          updateQueryParams({
            [stringKey]: debouncedParams[stringKey],
          } as Partial<QueryParams>);

          debounceTimers.current[stringKey] = null;
        }, 300);
      }
    },
    [debouncedValues, updateQueryParams]
  );

  return { queryParams: params, setQueryParams };
};
