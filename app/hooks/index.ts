// Shared hooks used across the application
import { useState, useEffect } from 'react';
import type { ApiResponse } from '~/types';

// Hook for managing async data fetching
export function useAsync<T>(
  asyncFunction: () => Promise<ApiResponse<T>>,
  dependencies: unknown[] = [],
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    setLoading(true);
    setError(null);

    asyncFunction()
      .then(response => {
        if (!isCancelled) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.error || 'Unknown error');
          }
        }
      })
      .catch(err => {
        if (!isCancelled) {
          setError(err.message || 'Unknown error');
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, dependencies);

  return { data, loading, error, refetch: () => setLoading(true) };
}

// Hook for managing local storage
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}

// Hook for managing boolean toggle state
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}
