1) Component Structure

I split UI into TicketForm, TicketList, TicketItem, SearchBar, and TicketCounter. Each component owns a single responsibility: form handles inputs/validation; list orchestrates items; item renders a ticket “card”; search emits a query; counter derives a small aggregate from state. This keeps render logic simple, encourages reuse (e.g., the counter can appear anywhere), and makes testing straightforward. App composes them and holds shared state, avoiding unnecessary context for such a small app while preventing prop chains from becoming complex.

2) State Management

All ticket data and the search term live in App via useState. Children receive callbacks and derived data through props. For this assignment there’s no backend and limited scope, so colocating state at the top keeps the data‑flow explicit and predictable. Where necessary, memoization (useMemo) minimizes recomputation for filtered tickets. If features grew (editing, sorting, pagination), I would still keep state in App or introduce React Context to avoid prop drilling before considering external state libraries.

3) Performance Considerations

With 1,000+ tickets, I’d add list virtualization (e.g., react-window) to render only visible rows, memoize TicketItem with React.memo, and debounce search to reduce filter churn. I’d normalize ticket objects by ID and derive filtered IDs instead of slicing big arrays. Suspense‑friendly data fetching would be considered if a backend is added. I’d also split code for admin/reporting pages and avoid inline anonymous handlers in hot paths. DevTools profiling would guide hot‑spot optimizations.

4) Search Behavior

Debounce keystrokes (e.g., 200–300ms). Highlight matched terms in title/description. Add filters for priority/status and a clear‑search control. Preserve the query in the URL (e.g., ?q=) so search is shareable and survives reloads. Consider fuzzy matching for typos and stemming for pluralization. For large datasets, paginate or infinite‑scroll search results.

5) What I Googled / Used GPT For

I built the app using ChatGPT in about 10 minutes, leveraging it for generating the initial component structure, code snippets, and ensuring all assessment requirements were met quickly. I also confirmed the latest CLI syntax for creating a Vite React project (npm create vite@latest ...) to start with the right setup. While GPT provided the bulk of the implementation and explanations, I reviewed, tested, and adjusted the output to ensure it worked correctly and aligned with the brief.