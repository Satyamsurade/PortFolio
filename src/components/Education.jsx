import React from "react";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <>
      <style>{`
        .education-section {
          padding: 60px 20px;
          border-bottom: 1px solid #333;
          color: #f1f1f1;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        .education-heading {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 40px;
        }
        .education-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .education-card {
          width: 100%;
          max-width: 700px;
          background-color: #1f1f1f;    /* card background stays dark */
          border: 2px solid #444;       /* normal border color */
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: border-color 0.3s ease;
          text-align: left;
        }
        /* 🔴 Only the border color changes to laser red on hover */
        .education-card:hover {
          border-color: #ff0000;        /* laser red border */
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

      <section className="education-section">
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
