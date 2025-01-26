"use client";

import { useState } from "react";
import Image from "next/image";

function AdventureStep({ gif, question, options }) {
  return (
    <div className="relative h-screen w-full bg-spaceBlue text-white">
      {/* GIF preenchendo a div */}
      <Image
        src={gif}
        alt="Adventure GIF"
        fill
        className="object-cover z-0 rounded-md"
        priority
      />

      {/* Botões no topo */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={options[0].action}
          className="px-4 py-2 bg-black bg-opacity-80 text-vividPink rounded-lg shadow-md hover:bg-opacity-100 font-bold transition duration-200"
        >
          {options[0].text}
        </button>
      </div>
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={options[1].action}
          className="px-4 py-2 bg-black bg-opacity-80 text-portalGreen rounded-lg shadow-md hover:bg-opacity-100 font-bold transition duration-200"
        >
          {options[1].text}
        </button>
      </div>

      {/* Pergunta na parte inferior */}
      <div className="absolute bottom-0 w-full bg-neonGreen p-6 rounded-b-md">
        <h2 className="text-xl md:text-2xl font-bold text-center">{question}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      gif: "/01.gif",
      question: "Pronto para mais uma aventura, Morty?",
      options: [
        {
          text: "Oh Rick, eu não sei...",
          action: () => setCurrentStep(1),
        },
        {
          text: "Vamos nessa, seu cuzão de merda!",
          action: () => setCurrentStep(2),
        },
      ],
    },
    {
      gif: "/02.gif",
      question: "Vamos logo, de bostinha?",
      options: [
        {
          text: "É que hoje tem prova do Senhor Golden Folder, Rick.",
          action: () => setCurrentStep(3),
        },
        {
          text: "Tudo bem, Rick. Vamos nessa!",
          action: () => setCurrentStep(4),
        },
      ],
    },
    {
      gif: "/03.gif",
      question: "Golden Folder? Ele já era! E agora?",
      options: [
        {
          text: "Ok, Rick. Prossiga.",
          action: () => setCurrentStep(5),
        },
        {
          text: "Eu preciso ir estudar!",
          action: () => setCurrentStep(6),
        },
      ],
    },
  ];

  const currentContent = steps[currentStep];

  return (
    <AdventureStep
      gif={currentContent.gif}
      question={currentContent.question}
      options={currentContent.options}
    />
  );
}
