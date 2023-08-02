import { useEffect, useCallback } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  }, [ref, callback]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
