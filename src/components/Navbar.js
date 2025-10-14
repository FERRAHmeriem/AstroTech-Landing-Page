'use client';

import { useState } from 'react';

export default function Navbar({ className }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinUs = () => {
    console.log('Join Us clicked');
  };

  return (
    <>
      <nav 
        className={`w-full max-w-[1440px] h-[92px] bg-[#141C33] rounded-b-[36px] text-white mx-auto mt-5 ml-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative z-50 ${className}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-full px-4 lg:px-8 xl:px-16">
          
          <div className="flex-shrink-0 ml-4 lg:ml-8 xl:ml-14" style={{ marginLeft: '54px' }}>
            <img 
              src="/astrotechLogo.svg" 
              alt="AstroTech Logo"
              className="h-10 lg:h-12 w-auto"
              width={120}
              height={48}
              loading="eager"
            />
          </div>

          <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-12 items-center">
            <NavButton href="#home">Home</NavButton>
            <NavButton href="#events">Events</NavButton>
            <NavButton href="#about">About Us</NavButton>
            <NavButton href="#contacts">Contacts</NavButton>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block flex-shrink-0 mr-4 lg:mr-8 xl:mr-12" style={{ marginRight: '54px' }}>
              <button 
                className="join-us-btn"
                onClick={handleJoinUs}
                aria-label="Join AstroTech"
              >
                JOIN US
              </button>
            </div>

            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 mr-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#141C33] border-t border-[#2F456F] rounded-b-[36px] py-4 px-6">
            <div className="flex flex-col gap-4">
              <MobileNavButton href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavButton>
              <MobileNavButton href="#events" onClick={() => setIsMobileMenuOpen(false)}>
                Events
              </MobileNavButton>
              <MobileNavButton href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </MobileNavButton>
              <MobileNavButton href="#contacts" onClick={() => setIsMobileMenuOpen(false)}>
                Contacts
              </MobileNavButton>
              <button 
                className="mobile-join-us-btn mt-4"
                onClick={() => {
                  handleJoinUs();
                  setIsMobileMenuOpen(false);
                }}
              >
                JOIN US
              </button>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .join-us-btn {
          width: 140px;
          height: 52px;
          font-family: var(--font-nasalization), sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 100%;
          color: #EFF5FA;
          background: #5374AC;
          border: 2px solid #2F456F;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.5px;
        }
        
        .join-us-btn:hover {
          background: #3a5a8a;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .join-us-btn:active {
          transform: translateY(0);
        }
        
        .join-us-btn:focus {
          outline: 2px solid #EFF5FA;
          outline-offset: 2px;
        }

        .mobile-join-us-btn {
          width: 100%;
          height: 52px;
          font-family: var(--font-nasalization), sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #EFF5FA;
          background: #5374AC;
          border: 2px solid #2F456F;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .mobile-join-us-btn:hover {
          background: #3a5a8a;
        }

        @media (max-width: 768px) {
          .join-us-btn {
            width: 120px;
            height: 44px;
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

function NavButton({ children, href }) {
  return (
    <a 
      href={href}
      className="nav-button group"
      role="button"
      aria-label={`Go to ${children}`}
    >
      <span className="nav-button-text">
        {children}
      </span>
      
      <style jsx>{`
        .nav-button {
          width: 120px;
          height: 30px;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
        }
        
        .nav-button:hover {
          height: 52px;
          width: 140px;
          background: #2F456F;
          border-radius: 24px;
        }
        
        .nav-button-text {
          font-size: 20px;
          color: #EBEEFF;
          line-height: 100%;
          white-space: nowrap;
          transition: all 0.3s ease-in-out;
          padding: 0 16px;
          font-family: var(--font-tommy);
          font-weight: 400;
        }
        
        .group:hover .nav-button-text {
          font-family: var(--font-nasalization) !important;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .nav-button {
            width: 100px;
          }
          
          .nav-button:hover {
            width: 120px;
          }
          
          .nav-button-text {
            font-size: 18px;
          }
        }
      `}</style>
    </a>
  );
}

function MobileNavButton({ children, href, onClick }) {
  return (
    <a 
      href={href}
      className="mobile-nav-button"
      onClick={onClick}
      role="button"
      aria-label={`Go to ${children}`}
    >
      <span className="mobile-nav-button-text">
        {children}
      </span>
      
      <style jsx>{`
        .mobile-nav-button {
          width: 100%;
          height: 52px;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
          border-radius: 24px;
        }
        
        .mobile-nav-button:hover {
          background: #2F456F;
        }
        
        .mobile-nav-button-text {
          font-size: 20px;
          color: #EBEEFF;
          line-height: 100%;
          white-space: nowrap;
          font-family: var(--font-nasalization);
          font-weight: 700;
        }
      `}</style>
    </a>
  );
}
