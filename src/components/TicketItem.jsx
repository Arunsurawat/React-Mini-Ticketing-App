import React from 'react';

function short(text, len = 80) {
  if (!text) return '';
  return text.length > len ? text.slice(0, len) + '…' : text;
}

export default function TicketItem({ ticket }) {
  return (
    <div className="item">
      <h3>
        {ticket.title} <small>({ticket.priority})</small>
      </h3>
      <div className="muted">Status: {ticket.status || 'open'}</div>
      <p>{short(ticket.description, 120)}</p>
    </div>
  );
}