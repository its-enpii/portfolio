import { useState, useEffect } from "react";

export const useScrollSpy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = rect.top + scroll + offset;
          const bottom = top + rect.height;

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => scroll >= top && scroll < bottom);

      if (position) {
        setActiveId(position.id);
      }
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};
