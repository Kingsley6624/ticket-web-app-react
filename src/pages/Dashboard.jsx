import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TicketContext } from '../components/TicketContext';


const Dashboard = () => {
  const navigate = useNavigate();
  const {tickets} = useContext(TicketContext)

    const total = tickets.length;
    const open = tickets.filter(t => t.status === 'open').length;
    const inprogress = tickets.filter(t => t.status === 'in_progress').length;
    const close = tickets.filter(t => t.status === 'close').length;

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-600">Dashboard</h1>
        {/* <button
          onClick={()=> navigate('/auth/login')}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button> */}
      </header>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-indigo-600">Total Tickets</h2>
          <p className="text-3xl font-bold text-gray-800">{total}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-yellow-500">Open Tickets</h2>
          <p className="text-3xl font-bold text-gray-800">{open}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-green-600">Tickets In_progress</h2>
          <p className="text-3xl font-bold text-gray-800">{inprogress}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-green-600">Closed Tickets</h2>
          <p className="text-3xl font-bold text-gray-800">{close}</p>
        </div>
      </section>

      <nav className="text-center">
        <button
          onClick={() => navigate('/tickets')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Go to Ticket Management
        </button>
      </nav>
    </div>
  )
}

export default Dashboard