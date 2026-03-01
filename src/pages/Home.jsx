import { Link } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://media.istockphoto.com/id/2204309551/photo/meeting-women-and-business-people-with-laptop-in-office-investment-project-and-discussion.jpg?s=612x612&w=0&k=20&c=GG7ASl_Xz18rQXAAW7UAeY5Kw9D80_EuRVwsgp_0t00="
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl"
        >
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
        </motion.div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Our Services
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid md:grid-cols-3 gap-10"
          >
            {/* Service Card 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
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
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
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
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                alt="business"
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">
                Business Setup Abroad
              </h3>
              <p className="text-gray-600">
                Complete consultancy for international business registration and setup.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="py-24 px-6 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              "Amazing consultancy service! Got my Canada visa approved smoothly.",
              "They helped me secure admission in Australia. Highly recommended!",
              "Professional team helped me register my business in Dubai."
            ].map((review, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl"
              >
                <p className="italic">"{review}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}