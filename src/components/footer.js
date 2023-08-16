import React from 'react';
import '../style/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Najibullah Jafari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
