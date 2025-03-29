'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    question: "How comfortable are you with public speaking?",
    options: [
      { answer: "Very Comfortable", value: 5 },
      { answer: "Somewhat Comfortable", value: 3 },
      { answer: "Not Comfortable", value: 1 },
    ],
  },
  {
    question: "How often do you negotiate in your daily life?",
    options: [
      { answer: "Frequently", value: 5 },
      { answer: "Occasionally", value: 3 },
      { answer: "Rarely", value: 1 },
    ],
  },
  {
    question: "Do you have experience in managing a team?",
    options: [
      { answer: "Yes, I have managed teams", value: 5 },
      { answer: "I have some experience", value: 3 },
      { answer: "No, I have not managed a team", value: 1 },
    ],
  },
];

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [score, setScore] = useState<number | null>(null);

  const handleAnswerChange = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
    setScore(totalScore);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📝 Skills Assessment</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Answer the following questions to evaluate your skills.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-semibold mb-2">{q.question}</h2>
            {q.options.map((option, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option.value}
                  onChange={() => handleAnswerChange(index, option.value)}
                  className="mr-2"
                />
                {option.answer}
              </label>
            ))}
          </div>
        ))}
        <button onClick={handleSubmit} className="btn btn-primary w-full">
          Submit Assessment
        </button>

        {score !== null && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">Your Score: {score}</h2>
            <p className="text-gray-600">
              {score >= 12 ? "Great job! You have strong skills!" : "Keep practicing to improve your skills!"}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <Link href="/skills" className="text-blue-500 hover:underline">
          Back to Skills Overview
        </Link>
      </div>
    </div>
  );
}