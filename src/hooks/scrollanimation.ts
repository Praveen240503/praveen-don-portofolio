import { useRef, useCallback } from 'react';

/**
 * A custom hook to provide a ref and a function to scroll to that element.
 *
 * @returns An object containing the ref for the element and a scroll function.
 */
export const useScrollToElement = () => {
  const elementRef = useRef<HTMLElement>(null);

  const scrollTo = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return { elementRef, scrollTo };
};