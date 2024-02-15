import { useState, useEffect, useRef } from "react";

const useSlide = (threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const boundingBox = containerRef.current.getBoundingClientRect();
        const windowMidpoint = window.innerHeight / 2;

        const isVisible =
          boundingBox.top < windowMidpoint * threshold &&
          boundingBox.bottom > windowMidpoint;

        setIsVisible(isVisible);

        if (isVisible) {
          setOpacity(1);
        } else {
          setOpacity(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { containerRef, opacity, isVisible };
};

export default useSlide;