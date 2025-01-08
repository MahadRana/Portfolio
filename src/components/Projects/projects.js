import React from 'react';
import './Projects.css'; // External CSS for styling

const projects = [
    {
      title: "Full-Stack Prayer Tracker",
      stack: "React, Express.js, MySQL, Docker",
      description:
        "Built a full-stack application with a responsive React frontend and advanced state management using Context API. Configured RESTful APIs in Express.js for seamless communication with a MySQL database, ensuring real-time CRUD operations. Used Docker to containerize services, improving scalability and deployment.",
    },
    {
      title: "English to Spanish Translator",
      stack: "Python, TensorFlow",
      description:
        "Developed a Seq2Seq model with Bidirectional LSTMs in TensorFlow, achieving a BLEU score of over 0.3. Streamlined the data pipeline with advanced preprocessing techniques, including tokenization and one-hot encoding. Conducted extensive hyperparameter tuning to optimize translation performance.",
    },
    {
      title: "HelpDesk AI",
      stack: "AWS EC2, React, Express.js, OpenAI API",
      description:
        "Created a chatbot for PC troubleshooting, hosted on AWS EC2 for scalability and security. Integrated GPT models with an Express.js backend to provide intelligent responses. Designed a React frontend with real-time chat functionality and advanced state management.",
    },
    {
      title: "QuizConnect",
      stack: "C, Multithreading",
      description:
        "Developed a client-server trivia game using socket programming and TCP/IP. Designed a protocol to distribute trivia questions and manage responses. Implemented multithreading to handle multiple clients, ensuring synchronized gameplay and efficient communication.",
    },
  ];
  
export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-stack">{project.stack}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
