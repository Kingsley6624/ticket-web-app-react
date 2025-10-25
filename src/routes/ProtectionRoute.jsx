import { Navigate } from 'react-router-dom';

const ProtectionRoute = ({children}) => {
  const isAuthenticated = !!localStorage.getItem('ticketapp_session');
  return isAuthenticated ? children : <Navigate to='/auth/login' />;
}

export default ProtectionRoute

