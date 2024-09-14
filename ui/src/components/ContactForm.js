import React from "react";
import { TextField, Button, Typography, Container, Grid2, Box, useTheme, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Import the API endpoint for creating a contact
import { CREATE_CONTACT } from "../services/api";

// Yup validation schema for form
const validationSchema = yup.object({
    firstName: yup.string()
        .required("First Name is required")
        .matches(/^[a-zA-Z\s]*$/, "First Name can only contain letters")
        .min(2, "First Name must be at least 2 characters")
        .max(50, "First Name must be less than 50 characters"),
    lastName: yup.string()
        .required("Last Name is required")
        .matches(/^[a-zA-Z\s]*$/, "Last Name can only contain letters")
        .min(2, "Last Name must be at least 2 characters")
        .max(50, "Last Name must be less than 50 characters"),
    email: yup.string()
        .email("Invalid email")
        .required("Email is required")
        .min(5, "Email must be at least 5 characters")
        .max(50, "Email must be less than 50 characters"),
    phone: yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone must be a number")
        .min(10, "Phone must be at least 10 digits")
        .max(10, "Phone cannot be more than 10 digits"),
    note: yup.string()
        .matches(/^[a-zA-Z0-9\s\.,!?]*$/, "Note can only contain letters, numbers, and punctuation")
        .max(500, "Note must be less than 500 characters")
});

const ContactForm = () => {
    const navigate = useNavigate();                                 
    const theme = useTheme();                                       
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));   

    // Formik setup for form handling
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            note: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post(CREATE_CONTACT, values);
                // Redirect to success page if successful
                if (response.status === 201) {
                    navigate('/success');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Failed to submit form. Please try again later.');
            }
        }
    });

    return (
        <Container maxWidth="sm" sx={{ paddingTop: 12, paddingBottom: 12 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: 6, paddingBottom: 6}}>
                Contact Form
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid2 container spacing={3}>
                    {/* First Name */}
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Grid2>
                    {/* Last Name */}
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                    </Grid2>
                    {/* Email */}
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid2>
                    {/* Phone */}
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                            label="Phone (+61)"
                            variant="outlined"
                            fullWidth
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                    </Grid2>
                    {/* Note */}
                    <Grid2 item xs={12}>
                        <TextField
                            label="Additional Note"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={isMobile ? 2 : 4}
                            name="note"
                            value={formik.values.note}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.note && Boolean(formik.errors.note)}
                            helperText={formik.touched.note && formik.errors.note}
                            sx={{ '& textarea': { resize: 'both' } }}
                        />
                    </Grid2>
                </Grid2>

                {/* Submit Button */}
                <Box display="flex" justifyContent="center" mt={4}>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        sx={{ width: '200px', padding: '12px', fontSize: '16px' }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
}

export default ContactForm;