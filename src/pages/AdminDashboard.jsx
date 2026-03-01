import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  // Load bookings on component mount
  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  // Delete booking function
  const handleComplete = (id) => {
    const updatedBookings = bookings.filter(
      (item) => item.id !== id
    );

    // Update state
    setBookings(updatedBookings);

    // Update localStorage
    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6">
          Admin Dashboard
        </h1>

        {bookings.length === 0 ? (
          <p className="text-gray-600">
            No bookings yet
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {bookings.map((item) => (
              <div
                key={item.id}
                className="relative border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white"
              >
                {/* Tick Button */}
                <button
                  onClick={() => handleComplete(item.id)}
                  className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                  title="Mark as Completed"
                >
                  ✓
                </button>

                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Phone:</strong> {item.phone}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Date:</strong> {new Date(item.date).toDateString()}</p>
                <p><strong>Time:</strong> {item.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}