import { createContext, useContext } from "react";

// Creating the context for the Accordion.
export const AccordionContext = createContext<{
  activeItem: string;
  changeSelectedItem: (item: string) => void;
}>({ activeItem: "", changeSelectedItem: () => {} });

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};
