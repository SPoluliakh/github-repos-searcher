import { useEffect, useState } from 'react';

export const useDebouns = (value, delay = 500) => {
  const [debouns, setDebouns] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouns(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouns;
};
