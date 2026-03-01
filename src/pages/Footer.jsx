import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* ================= FOOTER ================= */}
            <footer className="bg-gray-900 text-gray-300 py-12 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">
                            GlobalConsult
                        </h3>
                        <p>
                            Your trusted partner for international travel, education and business solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Services</h4>
                        <ul className="space-y-2">
                            <li>Travel Visa</li>
                            <li>Study Abroad</li>
                            <li>Business Setup</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Contact</h4>
                        <ul className="space-y-2">
                            <li>Email: support@globalconsult.com</li>
                            <li>Phone: +91 982******</li>
                            <li>Location: India</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                    </div>

                </div>

                <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
                    © 2026 GlobalConsult. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer
