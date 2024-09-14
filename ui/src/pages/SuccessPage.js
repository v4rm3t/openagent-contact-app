import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate = useNavigate(); 

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container sx={{ marginTop: '80px', textAlign: 'center' }}>
            <Box sx={{ padding: '40px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
                <Typography variant="h4" gutterBottom>
                    Thank you for your submission!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    We will be in touch shortly.
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

export default SuccessPage;