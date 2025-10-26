// TicketContext.js
import { createContext, useState, useEffect } from 'react';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
  const storedTickets = localStorage.getItem('tickets');
  if (storedTickets) {
    setTickets(JSON.parse(storedTickets));
  }
}, []);

useEffect(() => {
  localStorage.setItem('tickets', JSON.stringify(tickets));
}, [tickets]);

  return (
    <TicketContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketContext.Provider>
  );
};