import React, { useState } from "react";
import { useContext } from "react";
import { TicketContext } from "../components/TicketContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tickets = () => {
  const { tickets, setTickets } = useContext(TicketContext);

  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    status: "open",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTickets(tickets.map((t) => (t.id === form.id ? form : t)));
      toast.success("Ticket updated successfully!");
      setIsEditing(false);
    } else {
      setTickets([...tickets, { ...form, id: Date.now() }]);
      toast.success("Ticket created successfully!");
    }
    setForm({ id: null, title: "", description: "", status: "open" });
  };

  const handleEdit = (ticket) => {
    setForm(ticket);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter((t) => t.id !== id));
      toast.info("Ticket deleted.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Ticket Management
      </h1>

      {/* Ticket Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Ticket" : "Create New Ticket"}
        </h2>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="open">open</option>
          <option value="in_progress">in_progress</option>
          <option value="closed">closed</option>
        </select>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {isEditing ? "Update Ticket" : "Create Ticket"}
        </button>
      </form>

      {/* Ticket List */}
      <div className="grid gap-6 md:grid-cols-3">
        {tickets.length === 0 ? (
          <p className="text-gray-500">No tickets available.</p>
        ) : (
          tickets.map((ticket) => (
            <div key={ticket.id} className="relative bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <p className="text-gray-700 mb-2">{ticket.description}</p>
              <span
                className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${
                  ticket.status === "closed"
                    ? "bg-green-100 text-green-700"
                    : ticket.status === "in_progress"
                    ? "bg-blue-100 text-blue-700"
                    : ticket.status === "open"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {ticket.status.replace("_", " ")}
              </span>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleEdit(ticket)}
                  className="text-indigo-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ticket.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Tickets;
