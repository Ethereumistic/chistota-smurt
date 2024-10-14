import React, { useState, useEffect } from 'react';

const ScrollTracker: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State for window width

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update window width on resize
    };

    // Add scroll and resize event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Call handler right away to set initial values
    handleScroll();
    handleResize();

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-md z-[6666]">
      Scrolled: {scrollY.toFixed(2)}px | Width: {windowWidth}px {/* Display window width */}
    </div>
  );
};

export default ScrollTracker;