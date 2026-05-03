
import React, { useState, useEffect } from "react";
import logo from "/home/zilla/Desktop/jobmate/client/public/favicon.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update active link based on URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setActiveLink(hash);
      setMenuOpen(false); // Close menu when link is clicked
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "PORTFOLIO", id: "portfolio" },
    { label: "CONTACT", id: "contact" }
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className={`main-header ${scrolled ? "active" : ""}`}>
        <div className="container nav-wrapper">
          <div className="logo-container">
            <img src={logo} alt="Fintech Print Innovations" />
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <nav className={`glass-nav ${menuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={activeLink === link.id ? "active" : ""}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              className="sign-in-btn"
              onClick={() => setModalOpen(true)}
            >
              SIGN IN
            </button>
          </nav>
        </div>
      </header>

      {/* Auth Modal Component */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;