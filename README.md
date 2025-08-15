# React-Mini-Ticketing-App
Build a Mini Ticketing App with React that lets users create, view, and search support tickets.
---

## Features

- **Create Ticket Form** — Title, Description, Priority (Low/Medium/High) with Save button.
- **Ticket List View** — Displays all submitted tickets with title, priority, and short description. Auto-updates after new ticket creation.
- **Search Bar** — Filters tickets by keyword in title or description (case-insensitive).
- **Ticket Counter** — Displays the number of open tickets.
- Fully broken into reusable components:  
  `TicketForm`, `TicketList`, `TicketItem`, `SearchBar`, `TicketCounter`.

---

## Tech Stack

- **React** (Vite for setup)
- **Function components & hooks**
- **Local state only** (no Redux or backend)
- **Basic CSS** styling
- **Node.js** v16 or latest for **npm**

---

## How to Run

```bash
npm install
npm run dev


## Demo Preview
![Ticketing App Demo](assets/demo.gif)