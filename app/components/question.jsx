'use client';
import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div
    className={`bg-white w-[328px] md:w-[619px] rounded-2xl my-8 transition-all duration-300 ${
      isOpen ? "h-auto" : "h-[50px] md:h-[48px]"
    }`}
  >
    <div onClick={onClick} className="relative duration-300 cursor-pointer">
      <h3 className="font-bold text-sm md:text-lg p-3">{title}</h3>
      <span className="absolute right-[2%] md:top-[18%] top-[28%]">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </span>
    </div>
    {isOpen && (
      <div className="md:text-base text-sm scale-y-100 bg-white origin-top py-3 px-4 mt-2 rounded-2xl">
        <p className="font-bold">{content}</p>
      </div>
    )}
  </div>
);

export const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {
      title: "How much does it cost to set up a store?",
      content:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    {
      title: "What kind of digital products can I sell?",
      content:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    {
      title: "Do I need technical skills to use the platform?",
      content:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    {
      title: "Is there a limit to the number of products I can list?",
      content:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    {
      title: "How do I receive payments for my sales",
      content:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    {
      title: "Can I sell internationally on this marketplace?",
      content:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    // Add more questions here
  ];

  return (
    <div className="flex md:flex-col flex-col lg:flex-row lg:justify-between md:items-center w-[328px] lg:w-[1171px] mx-auto">
      <div>
        <h1 className="text-[#00DC82] font-bold text-xl md:text-3xl w-[328px] md:w-[516px] mb-4">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="font-bold w-[328px] md:w-[516px] text-base text-white">
          Quick answers to questions you may have. Can’t find what you're
          looking for? Check out our full documentation
        </p>
      </div>
      <div>
        {questions.map((q, index) => (
          <AccordionItem
            key={index}
            title={q.title}
            content={q.content}
            isOpen={activeIndex === index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};
