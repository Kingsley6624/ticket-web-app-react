import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("ticketapp_session")
  );

  useEffect(() => {
    const handleSessionChange = () => {
      setIsLoggedIn(!!localStorage.getItem("ticketapp_session"));
    };
    window.addEventListener("sessionChange", handleSessionChange);
    return () => {
      window.removeEventListener("sessionChange", handleSessionChange);
    };
  }, []);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl" onClick={()=>setMenuOpen(false)}>
          Ticketer
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/signup">Get Started</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/tickets">Tickets</Link>
              <button
                onClick={() => {
                  localStorage.removeItem("ticketapp_session");
                  window.dispatchEvent(new Event("sessionChange"));
                  setIsLoggedIn(false);
                  window.location.href = "/auth/login";
                }}
                className="text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden">
          {!isLoggedIn ? (
            <>
              <Link to="/auth/login" onClick={()=>setMenuOpen(false)}>Login</Link>
              <Link to="/auth/signup" onClick={()=>setMenuOpen(false)}>Get Started</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" onClick={()=>setMenuOpen(false)}>Dashboard</Link>
              <Link to="/tickets" onClick={()=>setMenuOpen(false)}>Tickets</Link>
              <button
                onClick={() => {
                  localStorage.removeItem("ticketapp_session");
                  window.dispatchEvent(new Event("sessionChange"));
                  setIsLoggedIn(false);
                  window.location.href = "/auth/login";
                }}
                className="text-white text-left"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
