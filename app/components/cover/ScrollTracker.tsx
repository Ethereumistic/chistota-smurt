import React, { useState, useEffect } from 'react';

const ScrollTracker: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handler right away so state gets updated with initial window.scrollY
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-md z-[6666]">
      Scrolled: {scrollY}px
    </div>
  );
};

export default ScrollTracker;