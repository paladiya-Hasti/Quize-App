import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sampleQuestions = {
  1: [
    { id: 1, question: "2 + 2?", options: ["2", "3", "4", "5"], answer: 2 },
    { id: 2, question: "3 * 3?", options: ["6", "9", "12", "15"], answer: 1 },
  ],
  2: [
    { id: 1, question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen", "Salt"], answer: 0 },
    { id: 2, question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen", "Salt"], answer: 0 },
  ],
  3: [
    { id: 1, question: "what is v3 come", options: ["come", "came", "cought", "comes"], answer: 0 },
    { id: 2, question: "what is v2 go", options: ["goes", "go", "went", "gos"], answer: 2 },
  ],
  4: [
    { id: 1, question: "In which year did the lock down take place?", options: ["2016", "2022", "2010", "2020"], answer: 2 },
    { id: 2, question: "500 year note has been discontinued ?", options: ["2016", "2022", "2010", "2020"], answer: 0 },
  ],
  5: [
    { question: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: 3 },
    { question: "What year was JavaScript launched?", options: ["1996", "1995", "1994", "none of the above"], answer: 2 },
  ]
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
        <div className="d-flex flex-wrap justify-content-start border p-3 mb-4">
          {questions[currentIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="btn btn-outline-primary m-2 px-4 py-2"
              style={{ flex: '1 0 100%', maxWidth: 'calc(33.333% - 1rem)', marginBottom: '1rem' }}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-4 d-flex justify-content-between flex-column flex-md-row">
          <button
            onClick={handlePrevious}
            className="btn btn-secondary px-4 py-2 mb-2 mb-md-0"
            disabled={currentIndex === 0}
          >
            Previous
          </button>
  
          {/* If it's the last question, show 'Submit' */}
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
