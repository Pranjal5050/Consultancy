import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://media.istockphoto.com/id/2162645329/photo/teamwork-meeting-and-ideas-for-solution-or-decision-for-business-workplace-or-company-group.jpg?s=612x612&w=0&k=20&c=GTm_8uuh-QYmJQrWh2eNiQxVxaw-Vq7tN36GtjH44hc="
            alt="travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Global Travel, Study & Business Consultancy
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Helping tourists, students and entrepreneurs build their future internationally.
          </p>

          <Link
            to="/booking"
            className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg text-lg shadow-lg transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="https://media.istockphoto.com/id/1207753085/photo/female-travel-agent-giving-tickets-to-young-happy-couple.jpg?s=612x612&w=0&k=20&c=gOsucKRESmxeWc6UYK7QwnNiSN2c7EJxSj6DWhfcR7A="
                alt="travel"
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">
                Travel Visa Assistance
              </h3>
              <p className="text-gray-600">
                Get expert support for tourist visa processing and travel documentation.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                alt="study"
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">
                Study Abroad Programs
              </h3>
              <p className="text-gray-600">
                University admission guidance and student visa assistance worldwide.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                alt="business"
                className="rounded-xl mb-4 h-48 w-full"
              />
              <h3 className="text-xl font-semibold mb-3">
                Business Setup Abroad
              </h3>
              <p className="text-gray-600">
                Complete consultancy for international business registration and setup.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="py-20 px-6 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <p className="italic">
                "Amazing consultancy service! Got my Canada visa approved smoothly."
              </p>
              <h4 className="mt-4 font-semibold">– Rahul Sharma</h4>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <p className="italic">
                "They helped me secure admission in Australia. Highly recommended!"
              </p>
              <h4 className="mt-4 font-semibold">– Priya Verma</h4>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <p className="italic">
                "Professional team helped me register my business in Dubai."
              </p>
              <h4 className="mt-4 font-semibold">– Arjun Mehta</h4>
            </div>

          </div>
        </div>
      </section>

      <Footer/>

    </div>
  );
}