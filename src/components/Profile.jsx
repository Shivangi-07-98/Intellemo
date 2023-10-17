// ProfilePage.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [feedback, setFeedback] = useState(null);

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

  const handleInputChange = (field, value) => {
    setEditedUser({ ...editedUser, [field]: value });
  };

  const handleSaveChanges = async () => {
    console.log('Edited User:', editedUser); 
    try {
      const response = await axios.patch(`https://reqres.in/api/users/${userId}`, editedUser);
      setFeedback('User details updated successfully.');
      setUser(response.data); // Update the user with the latest data
    } catch (error) {
      console.error('Error updating user details:', error);
      setFeedback('Failed to update user details.');
    }
  };

  return (
    <div>
      {user && (
        <div>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <div>
            <label>
              First Name:
              <input
                type="text"
                value={editedUser.first_name || user.first_name}
                onChange={(e) => handleInputChange('first_name', e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                value={editedUser.last_name || user.last_name}
                onChange={(e) => handleInputChange('last_name', e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="text"
                value={editedUser.email || user.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Job:
              <input
                type="text"
                value={editedUser.job || user.job || ''}
                onChange={(e) => handleInputChange('job', e.target.value)}
              />
            </label>
          </div>
          <button onClick={handleSaveChanges}>Save Changes</button>
          <Link to="/">Back to Homepage</Link>
          {feedback && <p>{feedback}</p>}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
