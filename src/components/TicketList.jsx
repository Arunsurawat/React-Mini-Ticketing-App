import React from 'react';
import TicketItem from './TicketItem.jsx';

export default function TicketList({ tickets }) {
  if (!tickets?.length) return <p className="muted">No tickets found.</p>;

  return (
    <div className="list">
      {tickets.map((t) => (
        <TicketItem key={t.id} ticket={t} />)
      )}
    </div>
  );
}