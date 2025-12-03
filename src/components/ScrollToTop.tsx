import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, {
          immediate: false,
          duration: 1.2
        });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    };

    const timeoutId = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);
  
  return null;
} 
