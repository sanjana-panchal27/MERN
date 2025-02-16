function RecentActivities() {
  const activities = [
    { id: 1, text: "John Doe registered as a student" },
    { id: 2, text: "XYZ Company posted a new job" },
    { id: 3, text: "Placement drive scheduled for next week" },
  ];

  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Recent Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="border-b p-2">
            {activity.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivities;
