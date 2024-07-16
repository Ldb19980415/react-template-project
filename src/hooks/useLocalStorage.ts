import { useEffect, useState } from "react";

const getDefaultStorage = (key: string) => localStorage.getItem(key);

export const useLocalStorage = (
  key: string,
  defaultValue?: string
): [string, (v: string) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<string>(
    (getDefaultStorage(key) || defaultValue) ?? ""
  );

  const setStorageValue = (value: string) => {
    localStorage.setItem(key, value);
    if (value !== storedValue) {
      setStoredValue(value);
    }
  };

  const removeStorage = () => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      setStoredValue(storageValue);
    }
  }, []);

  return [storedValue, setStorageValue, removeStorage];
};

export default useLocalStorage;
