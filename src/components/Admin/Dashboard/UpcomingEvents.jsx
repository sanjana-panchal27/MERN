function UpcomingEvents() {
  const events = [
    { id: 1, date: "Feb 20, 2025", event: "Placement Drive - Google" },
    { id: 2, date: "Feb 25, 2025", event: "Workshop on Resume Building" },
  ];

  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="border-b p-2">
            <strong>{event.date}:</strong> {event.event}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingEvents;
