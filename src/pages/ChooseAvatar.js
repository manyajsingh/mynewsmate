import React from 'react';
import './ChooseAvatar.css';

const avatars = ['avatar1.png', 'avatar2.png', 'avatar3.png', 'avatar4.png'];

const ChooseAvatar = () => {
  return (
    <div className="avatar-container">
      <h2>Choose Your Avatar</h2>
      <div className="avatars">
        {avatars.map((avatar, index) => (
          <div className="avatar" key={index}>
            <img src={`/${avatar}`} alt={`Avatar ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseAvatar;
