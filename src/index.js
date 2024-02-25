import { useState, useEffect } from "react";

const useMatchMedia = (query) => {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    matchMedia.onchange = () => {
      setMatch(matchMedia.matches);
    };
    return () => {
      matchMedia.onchange = null;
    };
  }, [query]);

  return match;
};

export { useMatchMedia };
