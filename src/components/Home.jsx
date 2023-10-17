import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './User';
import { Pagination } from '@mui/material';
import UserGrid from './Usergrid';


const Home = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers();
    // fetchUserProfile();
  }, [page]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
      console.log("user",response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

//   const fetchUserProfile = async () => {
//     try {
//       const response = await axios.get(`https://reqres.in/api/users/${userId}`);
//       setUser(response.data.data);
//       console.log("d",response.data.data);
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//     }
//   };

  

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <UserGrid users={users} />
      <Pagination count={10} page={page} onChange={handlePageChange} />
    </div>
  );
};

export default Home;

  