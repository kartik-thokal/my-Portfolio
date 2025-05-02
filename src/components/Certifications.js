import React from "react";
import "../styles/Certifications.css";

import NPTEL from "../assets/certifications/NPTEL.png";
import Gfg from "../assets/certifications/Gfg_Inf.png";
import Udemy_Fs from "../assets/certifications/Udemy_Fs.jpg";
import Udemy_Ds from "../assets/certifications/Udemy-Dsa.jpg";

const Certifications = () => {
  const certificates = [
    
    {
      image: NPTEL,
      name: "Cloud Computing - NPTEL",
    },
    {
      image: Gfg,
      name: "GFG - DSA to Development",
    },
    {
      image: Udemy_Fs,
      name: "UDEMY - The Complete Full-Stack Web Development Bootcamp ",
    },
    {
      image: Udemy_Ds,
      name: "UDEMY - Mastering Data Structures & Algorithm using C & C++",
    },
  ];

  return (
    <div className="certifications-container">
      <h1 className="certifications-heading">Certifications</h1>
      {certificates.map((cert, index) => (
        <div className="cert-card" key={index}>
          <div className="cert-image">
            <img src={cert.image} alt={`Certificate ${index + 1}`} />
          </div>
          <div className="cert-name">
            <h2>{cert.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
