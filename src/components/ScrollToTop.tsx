import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Go to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#B91C1C] hover:bg-[#991B1B] active:bg-[#7F1D1D] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer border-2 border-white/20 hover:scale-105"
    >
      <ChevronUp className="w-6 h-6 stroke-[2.5]" />
    </button>
  );
};
