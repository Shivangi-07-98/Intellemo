import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditPage.css';

const EditProfilePage = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
  const [editedUser, setEditedUser] = useState({});
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    
    fetchUserProfile();
  }, [userId]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${userId}`);
      setEditedUser(response.data.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedUser({ ...editedUser, [field]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.patch(
        `https://reqres.in/api/users/${userId}`,
        editedUser
      );
      setFeedback('User details updated successfully.');
    } catch (error) {
      console.error('Error updating user details:', error);
      setFeedback('Failed to update user details.');
    }
  };

  const handleBackClick = () => {
    navigate(`/profile/${userId}`)
  };

  return (
    <div className="card-container">
      <div className="card">
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={editedUser.first_name || ''}
              onChange={(e) => handleInputChange('first_name', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={editedUser.last_name || ''}
              onChange={(e) => handleInputChange('last_name', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              value={editedUser.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Job:
            <input
              type="text"
              value={editedUser.job || ''}
              onChange={(e) => handleInputChange('job', e.target.value)}
            />
          </label>
        </div>
        <button className="save" onClick={handleSaveChanges}>Save Changes</button>
        <button className="back"onClick={handleBackClick}>Back</button>
        {feedback && <p>{feedback}</p>}
      </div>
    </div>
  );
};

export default EditProfilePage;