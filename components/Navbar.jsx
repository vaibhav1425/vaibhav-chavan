import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    closeMobileMenu(); // Close menu on route change
  }, [pathname]);

  return (
    <nav
      className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0"
      style={{ cursor: 'default' }}
    >
      <div className="mx-auto flex w-5/6 justify-between items-center">
        {/* Name/Logo aligned left */}
        <div className="text-3xl sm:text-2xl font-extrabold">
          <Link to="/" className="hover:underline">
            Vaibhav Chavan
          </Link>
        </div>

        {/* Desktop Navigation tabs aligned right */}
        <div className="hidden sm:flex space-x-6 items-center text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/projects" className="hover:underline">
            Projects
          </Link>
          <Link to="/experiences" className="hover:underline">
            Experience
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button aligned right */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-white text-center transition-all duration-300 ${
            isMobileMenuOpen
              ? 'flex flex-col items-center justify-center'
              : 'hidden'
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className="text-white text-3xl absolute top-4 right-4 focus:outline-none"
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-6">
            <li>
              <Link to="/" onClick={closeMobileMenu} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeMobileMenu}
                className="hover:underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/experiences"
                onClick={closeMobileMenu}
                className="hover:underline"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
