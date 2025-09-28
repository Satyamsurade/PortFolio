import React from "react";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <>
      <style>{`
        /* ===== Section styles ===== */
        .education-section {
          padding: 40px 20px;
          border-bottom: 1px solid #333;
          color: #f1f1f1;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        /* ===== Animated Gradient Heading ===== */
        .education-heading {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 24px;
          margin-top: 0;
          background: linear-gradient(
            270deg,
            #00f0ff,
            #ff00ff,
            #00f0ff
          );                           /* gradient colors */
          background-size: 600% 600%;   /* large background for smooth motion */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite; /* animation name and speed */
        }

        /* Keyframes for moving gradient */
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* ===== Cards ===== */
        .education-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .education-card {
          width: 100%;
          max-width: 700px;
          background-color: #1f1f1f;
          border: 2px solid #444;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: box-shadow 0.3s ease;
          text-align: left;
        }
        /* 🔵 Blue glow on hover */
        .education-card:hover {
          box-shadow: 0 0 30px rgba(0, 123, 255, 0.9);
        }
        .edu-degree {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .edu-institute {
          color: #ccc;
          margin-bottom: 4px;
          font-size: 1rem;
        }
        .edu-duration {
          color: #aaa;
          font-size: 0.9rem;
        }
      `}</style>

      <section id="education" className="education-section">
        <h1 className="education-heading">Education</h1>

        <div className="education-cards">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="education-card">
              <h2 className="edu-degree">{edu.degree}</h2>
              <p className="edu-institute">{edu.institute}</p>
              <p className="edu-duration">{edu.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
