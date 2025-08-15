

export default function TicketCounter({ tickets }) {
  const openCount = tickets.filter(ticket => ticket.status !== 'closed').length;
  return <div>You have {openCount} open tickets</div>;
}