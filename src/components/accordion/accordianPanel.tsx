import React, { ReactNode } from "react";
import { useAccordionContext } from "./accordionContext";


export const AccordionPanel: React.FC<{
    children: ReactNode;
    __cb__internal__accordion_label?: string;
    className?: string;
  }> = ({ children, __cb__internal__accordion_label: label, className }) => {
    const { activeItem } = useAccordionContext();
  
    const panelStyles = [
      "accordion-panel",
      label === activeItem ? "show-item" : "hide-item",
      className
    ].join(" ");
  
    return <div className={panelStyles}>{children}</div>;
  };