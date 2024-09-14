import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, Drawer, IconButton, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import fullLogo from "../assets/logo.svg";
import smallLogo from "../assets/small-logo.svg";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawer = (open) => (event) => {
        setOpenDrawer(open);
    }

    const drawerMenu = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawer(false)}
        >
            <List>
                <ListItem button component="a" href="/">
                    <ListItemButton>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem button component="a" href="/contact">
                    <ListItemButton>
                        <ListItemText primary="Contact Us" />
                    </ListItemButton>
                </ListItem>
                <ListItem button component="a" href="/contact-list">
                    <ListItemButton>
                        <ListItemText primary="Contact List" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* OpenAgent Logo */}
                <Box>
                    <Button href="/" color="inherit">
                        <img src={isMobile ? smallLogo : fullLogo} alt="OpenAgent Logo"/>
                    </Button>
                </Box>

                {/* Menu Drawer for mobile screens */}
                {isMobile ? (
                    <>
                    <IconButton edge="end" color="default" aria-label="menu" onClick={handleDrawer(true)}>
                        <MenuOpenIcon color="black" />
                    </IconButton>
                    <Drawer anchor="right" open={openDrawer} onClose={handleDrawer(false)}>
                        {drawerMenu}
                    </Drawer>
                    </>
                ) : (
                    /* Regular navbar for desktop */
                    <Box sx={{ 
                        display: 'flex', 
                        gap: 2, 
                        justifyContent: 'center', 
                        position: 'absolute', 
                        left: '50%', 
                        transform: 'translateX(-50%)',  
                        color: '#8c929c',
                        fontWeight: '600',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
                        }}>
                        <Button color="inherit" href="/">Home</Button>
                        <Button color="inherit" href="/contact">Contact Us</Button>
                        <Button color="inherit" href="/contact-list">Contact List</Button>
                    </Box>
                )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;