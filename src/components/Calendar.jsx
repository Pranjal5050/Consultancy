import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isBefore,
  addMonths,
  subMonths,
} from "date-fns";
import { useState } from "react";

export default function Calendar({ selectedDate, setSelectedDate }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(today)
  );

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const isBooked = (date) => {
    return bookings.some((booking) => {
      const bookedDate = new Date(booking.date);
      bookedDate.setHours(0, 0, 0, 0);
      return bookedDate.getTime() === date.getTime();
    });
  };

  // Get all days of current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const days = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  });

  return (
    <div>
      {/* Month Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() =>
            setCurrentMonth(subMonths(currentMonth, 1))
          }
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          ◀
        </button>

        <h2 className="text-lg font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>

        <button
          onClick={() =>
            setCurrentMonth(addMonths(currentMonth, 1))
          }
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          ▶
        </button>
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          const past = isBefore(date, today);
          const booked = isBooked(date);
          const selected =
            selectedDate && isSameDay(date, selectedDate);

          return (
            <button
              key={index}
              disabled={past || booked}
              onClick={() => setSelectedDate(date)}
              className={`
                p-3 rounded-lg border text-sm font-semibold
                transition duration-200 focus:outline-none

                ${
                  past || booked
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : selected
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white hover:bg-green-100"
                }
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}