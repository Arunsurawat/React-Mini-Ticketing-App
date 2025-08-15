import React, { useMemo, useState } from 'react';
import TicketForm from './components/TicketForm.jsx';
import TicketList from './components/TicketList.jsx';
import SearchBar from './components/SearchBar.jsx';
import TicketCounter from './components/TicketCounter.jsx';

export default function App() {
  // "No backend" — keep everything in local state (assessment requirement)
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Add new ticket (list auto-updates because state changes)
  const addTicket = (ticket) => {
    setTickets((prev) => [...prev, ticket]);
  };

  // Filter by keyword in title OR description (case-insensitive)
  const filteredTickets = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return tickets;
    return tickets.filter((t) =>
      (t.title || '').toLowerCase().includes(q) ||
      (t.description || '').toLowerCase().includes(q)
    );
  }, [tickets, searchTerm]);

  return (
    <div className="container">
      <h1>Mini Ticketing App</h1>

      {/* Create Ticket Form */}
      <TicketForm onAdd={addTicket} />

      {/* Search + Counter */}
      <div className="toolbar">
        <SearchBar onSearch={setSearchTerm} />
        <TicketCounter tickets={null} />
      </div>

      {/* Ticket List (auto-updates after creating a new ticket) */}
      <TicketList tickets={filteredTickets} />
    </div>
  );
}