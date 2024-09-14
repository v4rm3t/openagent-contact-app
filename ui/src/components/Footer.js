import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box component="footer" sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#11ab63',
            py: 2,
            textAlign: 'center',
            borderTop: '1px solid #ddd',
            color: '#fff'
          }}>
            <Typography variant="body1" component="div">
                OpenAgent &copy; 2024
            </Typography>
            <Typography variant="body1" component="div">
                Made with ❤️ by Meet Vadher
            </Typography>
        </Box>
    );
}

export default Footer;

