import { useEffect, useState } from "react";

const STORAGE_KEY = "taskbarIconOrder";

const readOrder = () => {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
  } catch {
    return [];
  }
};

const useTaskbarOrder = (windowNames) => {
  const [order, setOrder] = useState(readOrder);

  useEffect(() => {
    setOrder((current) => {
      const existing = current.filter((name) =>
        windowNames.includes(name)
      );

      const added = windowNames.filter(
        (name) => !existing.includes(name)
      );

      return [...existing, ...added];
    });
  }, [windowNames.join("|")]);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(order)
    );
  }, [order]);

  const moveIcon = (name, direction) => {
    setOrder((current) => {
      const index = current.indexOf(name);

      if (index === -1) return current;

      const target =
        direction === "left" ? index - 1 : index + 1;

      if (target < 0 || target >= current.length) {
        return current;
      }

      const next = [...current];

      [next[index], next[target]] = [
        next[target],
        next[index],
      ];

      return next;
    });
  };

  return { order, moveIcon };
};

export default useTaskbarOrder;