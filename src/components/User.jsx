// UserCard.js
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';


const UserCard = ({ user }) => {
    const navigate = useNavigate();

    const handleNavigateOnClick = (userId) => {
        console.log('hello')
        navigate(`/profile/${userId}`)
    }

    return (
        <Card style={{ width: '200px', margin: '10px', textAlign: 'center' }}>
            <CardMedia onClick={e => handleNavigateOnClick(user.id)}
                style={{ height: '150px', objectFit: 'cover' }}
                image={user.avatar}
                title={`${user.first_name} ${user.last_name}`}
            />
            <CardContent>
                <Typography variant="h6">{user.first_name}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;
