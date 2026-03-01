import { useState } from "react";
import Calendar from "../components/Calendar";
import { toast } from "react-toastify";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const timeSlots = [
    "10:00 AM",
    "12:00 PM",
    "2:00 PM",
    "4:00 PM",
  ];

  const handleSubmit = () => {
    if(!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill all the fields");
      return;
    }
    if(formData.name.length < 3) {
      toast.error("Name should be at least 3 characters long");
      return;
    }
    if(!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    if(!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!selectedDate || !selectedTime) {
      toast.error("Please select date and time");
      return;
    }

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const isSlotBooked = oldBookings.some(
      (booking) =>
        booking.date === selectedDate.toISOString() &&
        booking.time === selectedTime
    );

    if (isSlotBooked) {
      toast.success("This slot is already booked");
      return;
    }

    const newBooking = {
      id: Date.now(),
      ...formData,
      date: selectedDate.toISOString(),
      time: selectedTime,
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, newBooking])
    );

    alert("Booking successful ✅");

    setSelectedDate(null);
    setSelectedTime("");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Book Consultation
        </h2>

        {/* Calendar */}
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        {/* Time Selection */}
        {selectedDate && (
          <>
            <h3 className="text-lg font-semibold mt-8 mb-4">
              Select Time
            </h3>

            <div className="flex flex-wrap gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-lg border transition
                    ${
                      selectedTime === time
                        ? "bg-green-500 text-white"
                        : "bg-white hover:bg-indigo-100"
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="border p-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="border p-3 rounded-lg md:col-span-2"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Confirm Booking
            </button>
          </>
        )}
      </div>
    </div>
  );
}