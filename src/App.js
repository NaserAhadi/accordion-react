import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Accordions />
    </div>
  );
}

function Accordions() {
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
  return (
    <div className="accordions-container">
      {faqs.map((faq, index) => (
        <Accordion faq={faq} key={index} index={index} />
      ))}
    </div>
  );
}

function Accordion({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "accordion-card is-open-card" : "accordion-card"}>
      <button
        className="collapsible"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <h2
          className={
            isOpen
              ? "accordion-card-num is-open-card-num"
              : "accordion-card-num"
          }
        >
          {`0${index + 1}`}
        </h2>
        <h2 className={isOpen && "is-open-card-title"}>{faq.title}</h2>

        <h2 className="collapsible-icon">{isOpen ? "-" : "+"}</h2>
      </button>
      <p className={isOpen ? "content is-open-card-content" : "content"}>
        {faq.text}
      </p>
    </div>
  );
}
