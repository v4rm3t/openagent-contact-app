import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Container } from "@mui/material";

import HomePage from "./pages/HomePage";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

/* 
  Main Javascript file that wil run the app and delegate the routes for other pages
*/

const App = () => {
    return (
        <Container className="main-app">
            <Router>
                <Header />
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/contact-list" element={<ContactList />} />
                    <Route path="/success" element={<SuccessPage />} />
                </Routes>
                <Footer />
            </Router>
        </Container>
    );
}

export default App;