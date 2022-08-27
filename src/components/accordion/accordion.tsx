import React, { useState, useCallback, ReactNode } from "react";
import { AccordionContext } from "./accordionContext";
import "./accordion.styles.css";

const Accordion: React.FC<{
  children: ReactNode | ReactNode[];
  className?: string;
}> = ({ children, className }) => {
  const [activeItem, setActiveItem] = useState("");

  const changeActiveItem = useCallback(
    (value) => {
      if (activeItem !== value) setActiveItem(value);
    },
    [setActiveItem, activeItem]
  );
  return (
    <AccordionContext.Provider
      value={{ activeItem, changeSelectedItem: changeActiveItem }}
    >
      <div className={`accordion ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
