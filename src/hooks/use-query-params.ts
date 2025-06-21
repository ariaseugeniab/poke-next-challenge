import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { z } from 'zod';

interface UseQueryParamsOptions<T extends z.ZodType> {
  debouncedValues?: Array<keyof z.infer<T>>;
}

export const useQueryParams = <T extends z.ZodType>(
  schema: T,
  options: UseQueryParamsOptions<T> = {}
) => {
  type QueryParams = z.infer<T>;

  const { debouncedValues = [] } = options;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  // Initialize with schema defaults to prevent hydration mismatch
  const [params, setParams] = useState<QueryParams>(() => {
    return schema.parse({});
  });

  // Sync with URL params after mounting (client-side only)
  useEffect(() => {
    setMounted(true);
    const initialParams = Object.fromEntries(
      Array.from(searchParams.entries()).map(([key, value]) => [
        key,
        value ?? undefined,
      ])
    );
    const parsedParams = schema.parse(initialParams);
    setParams(parsedParams);
  }, [searchParams, schema]);

  const debounceTimers = useRef<Record<string, NodeJS.Timeout | null>>({});

  const latestParams = useRef(params);

  const updateQueryParams = useCallback(
    (updatedParams: Partial<QueryParams>) => {
      if (!mounted) return;

      const validatedParams = schema.parse({
        ...latestParams.current,
        ...updatedParams,
      });

      const newSearchParams = new URLSearchParams(searchParams.toString());

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
        // @ts-expect-error Property 'shallow' does not exist on type 'NavigateOptions'.
        shallow: true,
      });

      latestParams.current = validatedParams;
    },
    [pathname, router, searchParams, schema, mounted]
  );

  const setQueryParams = useCallback(
    (newParams: Partial<QueryParams>) => {
      setParams((prev) => ({ ...prev, ...newParams }));

      const debouncedParams: Partial<QueryParams> = {};
      const immediateUpdateParams: Partial<QueryParams> = {};

      for (const key in newParams) {
        if (debouncedValues.includes(key)) {
          debouncedParams[key] = newParams[key];
        } else {
          immediateUpdateParams[key] = newParams[key];
        }
      }

      if (Object.keys(immediateUpdateParams).length > 0) {
        updateQueryParams(immediateUpdateParams);
      }

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
