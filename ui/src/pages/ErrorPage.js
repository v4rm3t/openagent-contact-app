import React from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container sx={{ marginTop: '80px', textAlign: 'center' }}>
            <Box 
                sx={{
                    padding: '40px', 
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Oops, something went wrong!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Please try again later or return to the homepage.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ marginTop: '20px', padding: '10px 20px' }}
                    onClick={handleGoHome}
                >
                    Go to Homepage
                </Button>
            </Box>
        </Container>
    );
};

export default ErrorPage;
