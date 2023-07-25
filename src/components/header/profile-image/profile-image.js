import React from 'react';
import '../../../styles/header/profile-image/profile-image.css';
import profilePicture from '../../../images/portfolio-profile-picture.png';
function ProfileImage() {
    return (
      <div className="profile-image__container">
        <img className="profile-image" src={profilePicture} alt='Profile' />
      </div>
    );
  }
  
  export default ProfileImage;