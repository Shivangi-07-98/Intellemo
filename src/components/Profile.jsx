import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile();
  }, [userId]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${userId}`);
      setUser(response.data.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleEditClick = () => {
    navigate(`/edit/${userId}`);
  };

  const handleBackClick = () => {
    navigate(`/`);
  };

  return (
    <div className="card-container">
      {user && (
        <div className="card">
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <div>
            <p>
              <strong>First Name:</strong> {user.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {user.last_name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Job:</strong> {user.job || 'N/A'}
            </p>
          </div>
          <div >
          <button onClick={handleEditClick} className="edit-button">
            Edit
          </button>

          <button onClick={handleBackClick} className="back-to-homepage">
            Back
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;