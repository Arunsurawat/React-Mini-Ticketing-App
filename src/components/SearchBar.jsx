import React from 'react';

export default function SearchBar({ onSearch }) {
  return (
    <input
      className="input"
      type="text"
      placeholder="Search tickets (title or description)…"
      onChange={(e) => onSearch?.(e.target.value)}
      aria-label="Search tickets"
    />
  );
}