import React from 'react';
import './Home.css';
import 'animate.css'; // Import Animate.css

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        {/* Left Side: Text with animations */}
        <div className="home-text animate__animated animate__fadeInLeft">
          <h1>Hi, I'm Mahad Rana</h1>
          <p>
            I’m a software developer specializing in full-stack development and machine learning.
            I love building impactful solutions and solving challenging problems.
          </p>
          <a href = 'me' className="home-button animate__animated animate__pulse animate__infinite"
          onClick={() => window.open("/MahadRanaResume.pdf", "_blank")}>
            Resume
          </a>
        </div>

        {/* Right Side: Image with animations */}
        <div className="home-image animate__animated animate__fadeInRight">
          <img src='/images/ProfilePic.jpeg' alt="Mahad Rana" />
        </div>
      </div>
    </section>
  );
};
