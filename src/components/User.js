import React from 'react';
import './User.css';

const User = (props) => {
  const { name, picture, email, dob } = props.user;
  return (
    <div className="user d-flex justify-content-center align-items-center">

      <div className="user-img">
        <img src={picture.medium} alt="" />
      </div>
      <div className="user-info">
        <h2>{name.first} {name.last}</h2>
        <p><small>Email: {email}</small></p>
        <p><small>Salary per year: ${dob.age} k </small></p>
        <button className="pay-btn">Pay Employee</button>
      </div>

    </div>
  );
};

export default User;