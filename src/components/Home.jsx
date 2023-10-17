import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './User';
import { Box, Pagination } from '@mui/material';
import UserGrid from './Usergrid';
import './Home.css';


const Home = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers();
    
  }, [page]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="home-container">
      <div className="home-button">
         <h1 style={{display:"flex",justifyContent:"center",backgroundColor: "#f0f0f0"}}>Home</h1>
      {users && users.data && <UserGrid users={users.data} />}
      <Box display="flex" justifyContent="center">
      {users && <Pagination  count={users.total_pages} page={page} onChange={handlePageChange} />}
      </Box>
    </div>
 </div>
  );
};

export default Home;