import React, { ReactNode, useCallback } from "react";
import { useAccordionContext } from "./accordionContext";




export const AccordionButton: React.FC<{
    children: ReactNode;
    __cb__internal__accordion_label?: string;
    className?: string;
  }> = ({ __cb__internal__accordion_label: label, children, className }) => {
    const { changeSelectedItem } = useAccordionContext();
    const accordionButtonClickHandler = useCallback(() => {
      changeSelectedItem(label || "");
    }, [changeSelectedItem, label]);
  
    return (
      <div
        onClick={accordionButtonClickHandler}
        className={`accordion-button ${className}`}
      >
        {children}
      </div>
    );
  };