import React from "react";
import { CssBaseline, GlobalStyles, Container, Typography, Box, Card, CardContent } from "@mui/material";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const HomePage = () => {
    return (
        <>
            <CssBaseline />
            <GlobalStyles styles={{ body: { backgroundColor: '#f7f7f7' } }} />
                
            <Container className='home-page' sx={{
                minHeight: 'calc(100vh - 128px)', 
                paddingTop: '80px', 
                paddingBottom: '80px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'transparent'
            }}>

                {/* Intro Section */}
                <Box textAlign="center" my={4}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                        Welcome to OpenAgent
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#7f8c8d', fontSize: '1.1rem', maxWidth: '600px' }}>
                        Since 2013, our vision has been to make it easy for people to buy, sell, and own property. We're here to support you in every step of your journey.
                    </Typography>
                </Box>

                {/* Contact Details Card Section */}
                <Box my={4} width="100%" display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5" sx={{ color: '#2c3e50', paddingBottom: '20px' }}>
                        Get in touch with us
                    </Typography>

                    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={3}>

                        {/* Card 1: Contact Information */}
                        <Card sx={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3498db', textAlign: 'center' }}>
                                    Contact Us
                                </Typography>
                                <Box display="flex" alignItems="center" sx={{ paddingBottom: '8px' }}>
                                    <PhoneIcon sx={{ marginRight: '8px', color: '#3498db' }} />
                                    <Typography variant="body1"><strong>Phone:</strong> 13 24 34</Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <EmailIcon sx={{ marginRight: '8px', color: '#3498db' }} />
                                    <Typography variant="body1"><strong>Email:</strong> support@openagent.com.au</Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Card 2: Postal Address */}
                        <Card sx={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3498db', textAlign: 'center' }}>
                                    Postal Address
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    <LocationOnIcon sx={{ marginRight: '8px', color: '#3498db' }} />
                                    <Typography variant="body1">PO Box 419, Alexandria NSW 1435</Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Card 3: Contact Centre Hours */}
                        <Card sx={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3498db', textAlign: 'center' }}>
                                    Contact Centre Hours
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    <AccessTimeIcon sx={{ marginRight: '8px', color: '#3498db' }} />
                                    <Typography variant="body1">Monday - Friday 8:30 - 5:00</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default HomePage;