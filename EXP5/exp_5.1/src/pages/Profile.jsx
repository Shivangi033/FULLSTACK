import React from "react";
import myPhoto from "../profile.jpeg";

export default function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-card-modern">
        {/* Left Section */}
        <div className="profile-left">
          <img src={myPhoto} alt="Shivangi Kumari" className="profile-img-round" />
          <h2 className="name">Shivangi Kumari</h2>
          <p className="role">B.E. CSE (AI & ML)</p>
        </div>

        {/* Right Section */}
        <div className="profile-right">
          <h3 className="section-title">About Me</h3>
          <p className="text">
            Computer Science student specializing in AI & ML with strong interest
            in Web Development and practical project building. Skilled in HTML,
            CSS, and JavaScript with a passion for clean UI, responsive layouts,
            and continuous learning through hands-on coding.
          </p>

          <h3 className="section-title">Internship</h3>
          <ul className="list">
            <li>Frontend Web Development Internship (React)</li>
          </ul>

          <h3 className="section-title">Projects</h3>
          <ul className="list">
            <li>Student Portal UI</li>
            <li>To-Do App using React</li>
            <li>Responsive Navbar Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
