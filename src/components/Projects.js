import React from "react";
import "../styles/Projects.css";
import DocSwitch from '../assets/images/AgriInfo.png';
import Artistry from '../assets/images/Artistry.jpg';
import TripNest from '../assets/images/TripNest.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>

      <div className="project-card">
        <h2 className="project-title">AgriInfo - Agriculture Information Website</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            Agri Info is a user-friendly web platform designed to empower farmers with essential agricultural information. The website provides real-time updates on crop prices, latest agricultural news, and detailed guidance on fertilizers and pesticides. By integrating these resources into a single platform, the project aims to support informed decision-making and boost productivity in the farming community.
            </p>
            <p>
            The system is built with a focus on accessibility and usability, especially for rural users, ensuring they can navigate the site easily and find relevant information quickly. It serves as a digital bridge between modern agricultural practices and farmers looking to enhance their yields through reliable data and product recommendations..
            </p>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB,</p>
            <div className="project-buttons">
              <a href="https://github.com/kartik-thokal" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={DocSwitch} alt="DocSwitch file converter" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">Artistry</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            Artistry is a Laravel-based e-commerce platform dedicated to showcasing and selling diverse styles of paintings from artists around the world. Unlike traditional e-commerce sites, Artistry focuses exclusively on the art market, offering a curated collection of artwork at various price points. The platform provides a smooth browsing, purchasing, and user experience tailored for art enthusiasts and collectors.
            </p>
            <p><strong>Tech Stack:</strong> PHP, MySQL, HTML, CSS, Laravel FrameWork</p>
            <div className="project-buttons">
              <a href="https://github.com/kartik-thokal" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={Artistry} alt="Artistry Paintings" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">TripNest - A Website for Best Tourism</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            TripNest is a responsive travel website built using React, HTML, CSS, and Bootstrap. The platform showcases a variety of tourism packages, helping users explore and book their ideal travel experiences. It highlights attractive pricing and frequently features unbeatable deals on popular destinations, making travel both exciting and budget-friendly.
            </p>
            <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, BootStrap</p>
            <div className="project-buttons">
              <a href="https://github.com/kartik-thokal" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={TripNest} alt="TripNest" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
