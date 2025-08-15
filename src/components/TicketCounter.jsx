export default function TicketCounter({ tickets = [] }) {
  const openCount = Array.isArray(tickets)
    ? tickets.filter((t) => (t?.status ?? 'open') !== 'closed').length
    : 0;
  return <div className="counter">You have {openCount} open tickets</div>;
}