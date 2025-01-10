import "./App.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque ea fugit labore nobis veritatis. Ad aliquam beatae corporis doloremque, dolorum ducimus expedita harum, ipsa natus quam saepe sit suscipit.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque ea fugit labore nobis veritatis. Ad aliquam beatae corporis doloremque, dolorum ducimus expedita harum, ipsa natus quam saepe sit suscipit.",
  },
  {
    title: "Do you ship to countries outside EU?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque ea fugit labore nobis veritatis. Ad aliquam beatae corporis doloremque, dolorum ducimus expedita harum, ipsa natus quam saepe sit suscipit.",
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleToggle(id) {
    setSelectedId(id);
  }
  return (
    <div className="accordions-container">
      {data.map((faq, index) => (
        <div key={index}>
          <AccordionElement
            faq={faq}
            index={index}
            isOpen={index === selectedId}
            onSetSelected={handleToggle}
          />
        </div>
      ))}
    </div>
  );
}

function AccordionElement({ faq, index, isOpen, onSetSelected }) {
  return (
    <div
      onClick={() => onSetSelected(isOpen ? null : index)}
      className={isOpen ? "accordion-card is-open-card" : "accordion-card"}
    >
      <button className="collapsible">
        <h2
          className={
            isOpen
              ? "accordion-card-num is-open-card-num"
              : "accordion-card-num"
          }
        >
          {`0${index + 1}`}
        </h2>
        <h2 className={isOpen ? "is-open-card-title" : ""}>{faq.title}</h2>
        <h2 className="collapsible-icon">{isOpen ? "-" : "+"}</h2>
      </button>
      <p className={isOpen ? "content is-open-card-content" : "content"}>
        {faq.text}
      </p>
    </div>
  );
}
