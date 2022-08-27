import React, { ReactNode } from "react";
import "./accordion.styles.css";



export const AccordionItem: React.FC<{
  children: ReactNode[];
  label: string;
  className?: string;
}> = ({ children, label, className }) => {
  const childrenArray = React.Children.toArray(children);

  // Passing the label prop to the children of accordion item.
  // Adding the label prop along with other props.
  const accordionItemChildren = childrenArray.map((child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        __cb__internal__accordion_label: label
      });
    }
    return null;
  });
  return <div className={className}>{accordionItemChildren}</div>;
};
