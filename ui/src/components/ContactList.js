import React, { useState, useEffect } from "react";
import { Typography, Container, Grid2, List, ListItem, ListItemText, Snackbar, Alert, CircularProgress, IconButton, Box, Button } from "@mui/material";

import CheckIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlineOutlined';

// Import the API endpoints for fetching, verifying, and deleting contacts
import { GET_CONTACT, VERIFY_CONTACT, DELETE_CONTACT } from "../services/api";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            setLoading(true);
            try {
                const response = await fetch(GET_CONTACT);
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                setError("Failed to fetch contacts. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchContacts();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${DELETE_CONTACT}/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            if (response.ok) {
                setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
                setSuccessMessage(data.message);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("Failed to delete contact. Please try again.");
        }
    };

    const handleVerify = async (id) => {
        try {
            const response = await fetch(`${VERIFY_CONTACT}/${id}`, { method: "PUT" });
            const data = await response.json();
            if (response.ok) {
                setContacts((prevContacts) =>
                    prevContacts.map((contact) =>
                        contact.id === id ? { ...contact, verified: true } : contact
                    )
                );
                setSuccessMessage(data.message);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("Failed to verify contact. Please try again.");
        }
    };

    return (
        <Container sx={{ paddingTop: 12, paddingBottom: 12, maxWidth: "1200px" }}>
            <Typography variant="h4" align="center" gutterBottom>
                Contact List
            </Typography>

            {loading ? (
                <Grid2 container justifyContent="center">
                    <CircularProgress />
                </Grid2>
            ) : (
                <Grid2
                    container
                    sx={{
                        maxHeight: "800px",
                        overflowY: "scroll",
                        padding: 2,
                        borderRadius: 1,
                        boxShadow: 1,
                        backgroundColor: "#f9f9f9",
                        marginBottom: 2,
                    }}
                >
                    <List sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                        {contacts.length > 0 ? (
                            contacts.map((contact) => (
                                <ListItem
                                    key={contact.id}
                                    sx={{
                                        backgroundColor: contact.verified ? "#d1e7dd" : "white", 
                                        marginBottom: 2,
                                        borderRadius: "8px",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                        padding: 2,
                                        "&:hover": {
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                  <Grid2 container alignItems="flex-start" sx={{ width: '100%' }}>
                                    {/* Contact Details */}
                                    <Grid2 item xs={12} sm={12}>
                                        <ListItemText
                                            primary={
                                                <Box>
                                                    <Typography variant="h6">
                                                        {contact.first_name} {contact.last_name}
                                                    </Typography>
                                                </Box>
                                            }
                                            secondary={
                                                <Box>
                                                    <Typography variant="body2">
                                                        <strong>Email:</strong> {contact.email_address}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <strong>Phone:</strong> {contact.phone_number}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <strong>Note:</strong> {contact.additional_note ? contact.additional_note : "N/A"}
                                                    </Typography>
                                                </Box>
                                            }
                                            sx={{ wordBreak: "break-all" }}
                                        />
                                    </Grid2>

                                    {/* Action Buttons */}
                                    <Grid2
                                        item
                                        xs={12}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            marginTop: 2,
                                            paddingTop: 2,
                                            borderTop: "1px solid #e0e0e0",
                                            width: "100%",
                                        }}
                                    >
                                        {contact.verified ? (
                                            <Button
                                                variant="outlined"
                                                disabled
                                                sx={{
                                                    flex: 1, 
                                                    marginRight: "8px",
                                                    borderRadius: "50px",
                                                    padding: "10px",
                                                    color: "#4caf50",
                                                    border: "1px solid #4caf50",
                                                    "&.Mui-disabled": {
                                                        backgroundColor: "#e0f2f1",
                                                        borderColor: "#4caf50",
                                                    },
                                                }}
                                            >
                                                Verified
                                            </Button>
                                        ) : (
                                            <IconButton
                                                color="primary"
                                                onClick={() => handleVerify(contact.id)}
                                                disabled={contact.verified}
                                                sx={{
                                                    flex: 1,
                                                    marginRight: "8px",
                                                    borderRadius: "50px",
                                                    padding: "10px",
                                                    border: "1px solid rgba(33, 150, 243, 0.5)",
                                                    "&:hover": {
                                                        backgroundColor: "rgba(33, 150, 243, 0.1)",
                                                    }
                                                }}
                                            >
                                                <CheckIcon />
                                            </IconButton>
                                        )}

                                        <IconButton
                                            color="secondary"
                                            onClick={() => handleDelete(contact.id)}
                                            sx={{
                                                flex: 1,
                                                marginLeft: "8px",
                                                borderRadius: "50px",
                                                padding: "10px",
                                                border: "1px solid rgba(156, 39, 176, 0.5)",
                                                "&:hover": {
                                                    backgroundColor: "rgba(156, 39, 176, 0.1)",
                                                }
                                            }}
                                        >
                                            <DeleteOutlineIcon />
                                        </IconButton>
                                    </Grid2>
                                  </Grid2>
                                </ListItem>
                            ))
                        ) : (
                            <Typography align="center" color="textSecondary">
                                No contacts available.
                            </Typography>
                        )}
                    </List>
                </Grid2>
            )}

            {/* Notification for success message */}
            <Snackbar
                open={Boolean(successMessage)}
                autoHideDuration={3000}
                onClose={() => setSuccessMessage("")}
            >
                <Alert severity="success" onClose={() => setSuccessMessage("")}>
                    {successMessage}
                </Alert>
            </Snackbar>

            {/* Notification for error message */}
            <Snackbar open={Boolean(error)} autoHideDuration={3000} onClose={() => setError(null)}>
                <Alert severity="error" onClose={() => setError(null)}>
                    {error}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ContactList;