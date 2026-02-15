import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-12 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-6">
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
          
            
          </div>
        </nav>
        <aside>
          <p>Copyright © OPERAND-48 - AUST(CSE)</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
