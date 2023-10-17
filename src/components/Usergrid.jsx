// UserGrid.js
import React from 'react';

import UserCard from './User';
import { Grid } from '@mui/material';

const UserGrid = ({ users }) => {
  return (
    <Grid container justify="center" spacing={2}>
      {users.map((user) => (
        <Grid item key={user.id}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserGrid;
