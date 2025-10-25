import { Link } from 'react-router-dom';

export default function Navbar() {
  const isLoggedIn = !!localStorage.getItem('ticketapp_session');

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">YourApp</Link>
      <div className="space-x-4">
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
                localStorage.removeItem('ticketapp_session');
                window.location.href = '/auth/login';
              }}
              className="text-white"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}