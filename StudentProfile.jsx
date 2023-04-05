import React from 'react';
import './StudentProfile.css';

function StudentProfile({ name, email, rollNumber }) {
  return (
    <div className="student-profile-container">
      <h1 className="student-profile-heading">{name}</h1>
      <p className="student-profile-email">{email}</p>
      <div className="student-profile-details">
        <p className="student-profile-details-label">Roll Number:</p>
        <p className="student-profile-details-value">{rollNumber}</p>
      </div>
    </div>
  );
}

export default StudentProfile;
