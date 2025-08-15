import React, { useState } from 'react';

export default function TicketForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const canSave = title.trim() && description.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSave) return;

    const newTicket = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority,
      status: 'open', // ensure status exists for TicketCounter
    };

    onAdd?.(newTicket);

    // reset form
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <div className="form-row">
        <input
          className="input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select className="input" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="form-row">
        <textarea
          className="input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={!canSave}>Save</button>
    </form>
  );
}