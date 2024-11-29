import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <p className="mb-0 text-center">
              &copy; 2023 QuizMaster. All rights reserved. Created by{' '}
              <a
                href="https://github.com/hastipaladiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                Hasti Paladiya
              </a>{' '}
              on GitHub.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
