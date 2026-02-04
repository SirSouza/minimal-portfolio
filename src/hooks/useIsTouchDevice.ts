import { useEffect, useState } from 'react';

export function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-expect-error - Suporte para IE
        navigator.msMaxTouchPoints > 0
      );
    };

    checkTouch();
    
    // Verifica novamente após resize (alguns devices podem mudar)
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  return isTouchDevice;
}