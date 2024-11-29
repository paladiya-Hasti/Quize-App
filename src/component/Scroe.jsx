import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Score() {
  const location = useLocation();
  const navigate = useNavigate();

  const { userAnswers = [], questions = [], score } = location.state || {}; 

  if (!location.state) {
    return (
      <div className="container mt-5">
        <div className="text-center mt-4">
          <button
            className="btn btn-light px-4 py-2"
            onClick={() => navigate('/')}
          >
        
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Your Score: {score}/{questions.length}
      </h2>
      <ul className="list-group">
        {questions.map((q, index) => {
          const userAnswer = userAnswers[index];

          return (
            <li key={q.id || index} className="list-group-item">
              <h5 className="mb-3">
                <strong>Q{index + 1}: {q.question}</strong>
              </h5>
              <p className="mb-2">
                <strong>Your Answer:</strong>{" "}
                {userAnswer !== undefined ? (
                  <span className="text-primary">
                    {q.options?.[userAnswer] || "Invalid Option"}
                  </span>
                ) : (
                  <span className="text-danger">No Answer</span>
                )}
              </p>
              <p>
                <strong>Correct Answer:</strong>{" "}
                <span className="text-success">{q.options?.[q.answer]}</span>
              </p>
            </li>
          );
        })}
      </ul>

      <div className="text-center mt-4">
        <button
          className="btn btn-dark text-white px-4 py-2"
          onClick={() => navigate('/')}
        >
          Back to Quiz List
        </button>
      </div>
    </div>
  );
}
