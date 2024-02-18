import { useState, useEffect } from "react";

export const useWindowSize = (): {
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
} => {
  const [isTablet, setisTablet] = useState(
    window.innerWidth <= 768 && window.innerWidth >= 550
  );
  const [isMobile, setisMobile] = useState(window.innerWidth < 550);
  const [isDesktop, setisDesktop] = useState(
    window.innerWidth > 768 && window.innerWidth <= 2580
  );

  useEffect(() => {
    const handleResize = () => {
      setisTablet(window.innerWidth <= 768 && window.innerWidth >= 550);
      setisMobile(window.innerWidth < 550);
      setisDesktop(window.innerWidth > 768 && window.innerWidth <= 2580);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isTablet, isMobile, isDesktop };
};
