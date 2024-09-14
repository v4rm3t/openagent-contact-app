// Description: This file contains the logic to handle the requests from the contact routes.

// Add the contact
const createContact = async (req, res) => {
    const { firstName, lastName, email, phone, note } = req.body;
    
    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }
    
    try {
        await req.db("contacts").insert({
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            phone_number: phone,
            additional_note: note || ''  // Set note to empty string if not provided
        });
        res.status(201).json({ message: "Contact created successfully." });
    } catch (err) {
        res.status(500).json({ message: "Error creating contact." });
    }
};

// List all contacts
const listContacts = async (req, res) => {
    try {
        const contacts = await req.db("contacts").select("*");
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: "Error getting contacts." });
    }
};

// Verify the contact
const verifyContact = async (req, res) => {
    const id = req.params.id;
    try {
        await req.db("contacts").where({ id }).update({ verified: true });
        res.status(200).json({ message: `Contact verified.` });
    } catch (err) {
        res.status(500).json({ message: `Error verifying contact.` });
    }
};

// Delete the contact
const deleteContact = async (req, res) => {
    const id = req.params.id;
    try {
        await req.db("contacts").where({ id }).del();
        res.status(200).json({ message: `Contact deleted.` });
    } catch (err) {
        res.status(500).json({ message: `Error deleting contact.` });
    }
};

// Export the functions to be used as route handlers
module.exports = {
    listContacts,
    createContact,
    verifyContact,
    deleteContact,
};