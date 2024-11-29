import React from 'react';
import { Link } from 'react-router-dom';

const quizzes = [
  { id: 1, title: "Math Quiz", description: "Test your math skills" },
  { id: 2, title: "Science Quiz", description: "Challenge your science knowledge" },
  { id: 3, title: "English Quiz", description: "Test your math skills" },
  { id: 4, title: "social science Quiz", description: "Test your math skills" },
  { id: 5, title: "Computer Quiz", description: "Challenge your science knowledge" },

];

export default function QuizList() {
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Quiz List</h2>
    <div className="row">
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{quiz.title}</h5>
              <p className="card-text">{quiz.description}</p>
              <Link to={`/quiz/${quiz.id}`} className="btn btn-primary text-white mt-3">
                Start Quiz
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
    
  );
}
