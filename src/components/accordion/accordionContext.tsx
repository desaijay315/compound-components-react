import { createContext, useContext } from "react";

// Creating the context for the Accordion.
export const AccordionContext = createContext<{
  activeItem: string;
  changeSelectedItem: (item: string) => void;
}>({ activeItem: "", changeSelectedItem: () => {} });

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  // if (!context) {
  //   throw new Error("Accordian Context must be used within the a <Accordian>");
  // }
  return context;
};
