import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create navigate object for navigation

  // Function to toggle the modal visibility
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Function to handle form submission and redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login validation here (check username, password)
    
    // If login is successful, store login status (e.g., in localStorage)
    localStorage.setItem('isLoggedIn', true);

    // Navigate to the home page after successful login
    navigate('/'); // Use navigate to go to the home page
    handleClose(); // Close the modal after submission
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container">
          <a className="navbar-brand" href="/">QuizMaster</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contract">Contract</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleShow} href="#!">Sign Up</a> {/* Trigger modal */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal Component */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your login form here */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button variant="primary" type="submit">Sign up</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;
