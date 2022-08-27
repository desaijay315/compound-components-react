import "./styles.css";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} from "./components/accordion";

export default function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionItem label="react">
          <AccordionButton>React</AccordionButton>
          <AccordionPanel>
            <p>
              This is React.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem label="vue">
          <AccordionButton>Vue</AccordionButton>
          <AccordionPanel>
            <p>
              This is Vue.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem label="javascript">
          <AccordionButton>Javascript</AccordionButton>
          <AccordionPanel>
            This is JavaScript.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
