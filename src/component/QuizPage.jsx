import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sampleQuestions = {
  1: [
    { id: 1, question: "2 + 2?", options: ["2", "3", "4", "5"], answer: 2 },
    { id: 2, question: "3 * 3?", options: ["6", "9", "12", "15"], answer: 1 },
  ],
  2: [
    { id: 1, question: "What is o2?", options: ["Water", "Oxygen", "Hydrogen", "Salt"], answer: 0 },
    { id: 2, question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen", "Salt"], answer: 0 },
    { id: 3, question: "What is O2?", options: ["Water", "Oxygen", "Hydrogen", "Salt"], answer: 0 },
    { id: 4, question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen", "Salt"], answer: 0 },
  ],
  // More questions...
};

export default function QuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const questions = sampleQuestions[id];

  const handleAnswer = (index) => {
    setUserAnswers([...userAnswers, index]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    const score = userAnswers.reduce((total, answer, index) => {
      return answer === questions[index]?.answer ? total + 1 : total;
    }, 0);

    navigate("/", { state: { score } });
  };

  return (
    <div className="container mt-5">
      {questions && currentIndex < questions.length && (
        <div className="container border p-3">
          <h3 className="mb-4 p-3 border">{questions[currentIndex].question}</h3>
          <div className="row mt-4">
            {questions[currentIndex].options.map((option, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
                <button
                  onClick={() => handleAnswer(index)}
                  className="btn btn-outline-primary w-100"
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between flex-column flex-md-row mt-4">
            <button
              onClick={handlePrevious}
              className="btn btn-secondary px-4 py-2 mb-2 mb-md-0"
              disabled={currentIndex === 0}
            >
              Previous
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="btn btn-success px-4 py-2"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="btn btn-primary px-4 py-2"
                disabled={currentIndex === questions.length - 1}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
