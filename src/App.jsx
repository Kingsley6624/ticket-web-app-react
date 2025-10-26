import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ProtectionRoute from "./routes/ProtectionRoute";
import MainLayout from './layouts/MainLayout';
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import NotFound from "./pages/NotFound";
import { TicketProvider } from "./components/TicketContext";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectionRoute>
              <Dashboard />
            </ProtectionRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <ProtectionRoute>
              <Tickets />
            </ProtectionRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <TicketProvider>
      <RouterProvider router={router} />
    </TicketProvider>
  );
};

export default App;
