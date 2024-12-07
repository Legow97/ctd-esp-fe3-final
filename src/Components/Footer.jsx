import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context'; // Ajusta la ruta según sea necesario

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme}>
      <div className="footer-content">
        <img src="/images/DH.png" alt="DH Odonto Logo" />
        <p>&copy; 2024 DH Odonto. All rights reserved.</p>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-instagram.png" alt="Instagram" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-tiktok.png" alt="TikTok" />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;