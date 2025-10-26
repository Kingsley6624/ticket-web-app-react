import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Mainlayout