import { useState, useEffect } from 'react';

const useIsOnline = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOnline(true);
      console.log('Became online');
    });
    window.addEventListener('offline', () => {
      setIsOnline(false);
      console.log('Became offline');
    });
  }, []);

  return isOnline;
};

export default useIsOnline;
