export default function Dashboard() {
    const firstName = "User" // This will be replaced with actual auth later
  
    // Sample data for the calendar
    const calendarEvents = [
      { date: "2024-11-15", title: "Updates and Checkpoints Due" },
      { date: "2024-11-16", title: "Livestream 2" },
    ]
  
    // Sample data for What's Due
    const dueItems = [
      { assignment: "Update 1", date: "20234-11-16", status: "In Progress" },
      { assignment: "Update 2", date: "2024-11-16", status: "Not Started" },
      { assignment: "Checkpoint 1", date: "2024-11-16", status: "Not Started" },
    ]
  
    // Sample data for Resources
    const resources = [
      { title: "Buildspace Slides", url: "#", icon: "" },
      { title: "YCombinator Recs", url: "#", icon: "" },
      { title: "Frontera Slides", url: "#", icon: "" },
    ]
  
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header with gradient */}
        <header className="bg-gradient-to-b from-white to-black p-6 text-center h-48 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Welcome, {firstName}</h1>
        </header>
  
        {/* Main content */}
        <main className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Resources sidebar with smaller tiles */}
            <aside className="md:w-1/4">
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4 text-center">Resources</h2>
                <div className="grid grid-cols-2 gap-4">
                  {resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      className="bg-gray-700 p-3 rounded-lg text-center hover:bg-gray-600 transition-colors duration-200 flex flex-col items-center justify-center"
                      aria-label={`Access ${resource.title}`}
                    >
                      <span className="text-2xl mb-2" aria-hidden="true">{resource.icon}</span>
                      <span className="text-sm">{resource.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
  
            {/* What's Due section (Table style) */}
            <section className="md:w-1/2">
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4 text-center">What's Due</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-2 px-4 text-left">Assignment</th>
                        <th className="py-2 px-4 text-left">Due Date</th>
                        <th className="py-2 px-4 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dueItems.map((item, index) => (
                        <tr key={index} className="border-b border-gray-700 last:border-b-0">
                          <td className="py-2 px-4">{item.assignment}</td>
                          <td className="py-2 px-4">{item.date}</td>
                          <td className="py-2 px-4">
                            <span className={`px-2 py-1 rounded text-xs ${
                              item.status === 'Completed' ? 'bg-green-600' :
                              item.status === 'In Progress' ? 'bg-yellow-600' :
                              'bg-red-600'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
  
            {/* Up Next sidebar (Calendar style) */}
            <aside className="md:w-1/4">
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4 text-center">Up Next</h2>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={index} className="text-center text-xs font-semibold">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }, (_, i) => i + 1).map((day) => {
                    const date = new Date(2024, 10, day); // November 2023
                    const dateString = date.toISOString().split('T')[0];
                    const event = calendarEvents.find(e => e.date === dateString);
                    return (
                      <div
                        key={day}
                        className={`aspect-square flex items-center justify-center text-sm ${
                          event ? 'bg-blue-600 text-white rounded-full' : ''
                        }`}
                      >
                        {day <= 30 ? day : ''}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Upcoming Events:</h3>
                  <ul>
                    {calendarEvents.map((event, index) => (
                      <li key={index} className="mb-1 text-sm">
                        {event.date.split('-')[2]} - {event.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    )
  }