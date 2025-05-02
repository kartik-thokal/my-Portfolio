import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../assets/images/HeadShot.png";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img
          src={MyImage}
          alt="About Me"
          className="about-image"
        />
      </div>
      <div className="about-right">
        <h1>About Me</h1>
        <p>
        Hello, I am Kartik Thokal, a passionate Computer Science and Engineering student with a strong foundation in software development, problem-solving, and web technologies. I have experience working with C++, Java, JavaScript, and modern frameworks like React.js and Node.js. My primary interest lies in building scalable and user-centric applications, especially in the agricultural sector.
        </p>
        <p>
        I have developed projects like Agri Info, a platform for farmers to access real-time agricultural updates, and a Real-Time Chat Server, demonstrating my ability to work with backend and real-time communication technologies. Additionally, I have a strong grasp of data structures, algorithms, and database management, backed by certifications from GeeksforGeeks and Udemy.
        I am eager to apply my skills to challenging projects, collaborate with dynamic teams, and continuously enhance my technical expertise in the field of software engineering
        </p>
        <div className="about-buttons">
          <Link to="/resume" className="about-btn">Resume</Link>
          <Link to="/projects" className="about-btn">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
