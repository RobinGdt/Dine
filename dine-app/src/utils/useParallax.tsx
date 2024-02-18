import { useState, useEffect, useRef } from "react";

const useSlide = (threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && !hasAnimated) {
        const boundingBox = containerRef.current.getBoundingClientRect();
        const windowMidpoint = window.innerHeight;

        const isVisible =
          boundingBox.top < windowMidpoint * threshold &&
          boundingBox.bottom > windowMidpoint;

        setIsVisible(isVisible);

        if (isVisible) {
          setOpacity(1);
          setHasAnimated(true);
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
  }, [threshold, hasAnimated]);

  return { containerRef, opacity, isVisible };
};

export default useSlide;
