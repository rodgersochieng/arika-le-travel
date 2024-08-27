// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white" style={{ opacity: 0.9 }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p>Follow Us on Social Media</p>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-4 social-link">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="text-white me-4 social-link">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white social-link">
                <FaInstagram size={20} />
              </a>
            </div>
            <div className="mt-3">
              <a href="https://wa.me/+25443560826" className="btn btn-success">
                <i className="fa fa-whatsapp"></i> WhatsApp Inquiry
              </a>
      <p  className=" text-white text-center py-2 mt-3"  >&copy; {new Date().getFullYear()} Arika Le Travels. All rights reserved.</p>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
