import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About GlobalConsult
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Your trusted international consultancy partner
          </p>
        </div>
      </section>

      {/* ================= COMPANY DETAILS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            alt="company"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              GlobalConsult is an international consultancy firm providing
              expert guidance in travel visa services, study abroad programs,
              and international business setup.
            </p>
            <p className="text-gray-600 mb-4">
              With years of experience and a dedicated professional team,
              we have successfully helped hundreds of clients achieve
              their international goals.
            </p>
            <p className="text-gray-600">
              Our mission is to make global opportunities accessible
              through trusted advice and complete documentation support.
            </p>
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide transparent, reliable, and professional consultancy
              services that empower individuals and businesses globally.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a globally recognized consultancy brand known for
              excellence, integrity, and client success.
            </p>
          </div>

        </div>
      </section>

      {/* ================= LOCATION SECTION ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Location
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side - Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.istockphoto.com/id/1189064346/photo/city-map-with-pin-pointers-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=TrZHT8R7EOrQv4tRpdOUVuOk8KSEazds_8WZR91fVtU="
                alt="location"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Right Side - Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h3 className="text-2xl font-bold mb-6">
                Visit Our Head Office
              </h3>

              <div className="space-y-4 text-gray-600">

                <p>
                  <strong>Address:</strong><br />
                  GlobalConsult Pvt. Ltd.<br />
                  Australia, Melbourne<br />
                </p>

                <p>
                  <strong>Phone:</strong><br />
                  +91 98765 ****
                </p>

                <p>
                  <strong>Email:</strong><br />
                  support@globalconsult.com
                </p>

                <p>
                  <strong>Office Hours:</strong><br />
                  Monday – Saturday<br />
                  10:00 AM – 6:00 PM
                </p>

              </div>

              <Link
                to="/booking"
                className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Schedule a Visit
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-indigo-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose GlobalConsult?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Experienced Team
              </h4>
              <p>
                Our experts guide you at every step with accurate information.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Transparent Process
              </h4>
              <p>
                Clear documentation and honest consultation.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Global Reach
              </h4>
              <p>
                Serving clients across multiple countries worldwide.
              </p>
            </div>

          </div>

          <Link
            to="/booking"
            className="inline-block mt-10 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book Consultation
          </Link>

        </div>
      </section>
      <Footer/>
    </div>
  );
}