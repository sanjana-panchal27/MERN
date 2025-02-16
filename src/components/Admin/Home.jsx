import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
        <p>Manage students, companies, and placements efficiently.</p>
      </div>

      {/* Quick Links Section */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/admin/dashboard">
          <div className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100">
            <h3 className="text-lg font-semibold">📊 Dashboard</h3>
          </div>
        </Link>
        <Link href="/admin/students">
          <div className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100">
            <h3 className="text-lg font-semibold">🎓 Students</h3>
          </div>
        </Link>
        <Link href="/admin/companies">
          <div className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100">
            <h3 className="text-lg font-semibold">🏢 Companies</h3>
          </div>
        </Link>
        <Link href="/admin/reports">
          <div className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100">
            <h3 className="text-lg font-semibold">📑 Reports</h3>
          </div>
        </Link>
      </div>

      {/* System Overview Cards */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-xl font-bold">250</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Placed Students</h3>
          <p className="text-xl font-bold">120</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Total Companies</h3>
          <p className="text-xl font-bold">50</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Active Job Postings</h3>
          <p className="text-xl font-bold">15</p>
        </div>
      </div>

      {/* Notifications & Recent Activities */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {/* Recent Activities */}
        <div className="p-4 bg-white shadow-md rounded-lg flex-1">
          <h2 className="text-xl font-semibold mb-3">📌 Recent Activities</h2>
          <ul>
            <li className="border-b p-2">John Doe registered as a student</li>
            <li className="border-b p-2">XYZ Company posted a new job</li>
            <li className="border-b p-2">
              Placement drive scheduled next week
            </li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="p-4 bg-white shadow-md rounded-lg flex-1">
          <h2 className="text-xl font-semibold mb-3">🔔 Notifications</h2>
          <ul>
            <li className="border-b p-2">5 students applied for a job</li>
            <li className="border-b p-2">New company awaiting approval</li>
            <li className="border-b p-2">Interview results pending update</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
