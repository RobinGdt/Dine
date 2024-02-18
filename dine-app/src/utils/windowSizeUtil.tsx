import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [isTablet, setisTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setisTablet(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isTablet;
};
