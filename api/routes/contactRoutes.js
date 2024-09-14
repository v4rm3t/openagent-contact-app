// Description: This file contains the routes for the contact API.

const express = require('express');
const contactController = require('../controllers/contactController.js');

const router = express.Router();

// Get all contacts
router.get('/', contactController.listContacts);

// Add a new contact
router.post('/create', contactController.createContact);

// Verify a contact
router.put('/verify/:id', contactController.verifyContact);

// Delete a contact
router.delete('/delete/:id', contactController.deleteContact);

module.exports = router;