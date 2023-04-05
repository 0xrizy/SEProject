import React from 'react';
import './TeacherProfile.css';

function TeacherProfile({ name, email }) {
  return (
    <div className="teacher-profile-container">
      <h1 className="teacher-profile-heading">{name}</h1>
      <p className="teacher-profile-email">{email}</p>
    </div>
  );
}

export default TeacherProfile;
