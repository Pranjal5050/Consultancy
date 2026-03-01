import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        if (email === "" || password === "") {
            toast.error("Please fill all the fields ❌");
            return;
        }
        if (email === "admin@gmail.com" && password === "123456") {
            localStorage.setItem("role", "admin");
            navigate("/admin");
        } else {
            toast.error("Invalid Credentials ❌");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-80">
                <h2 className="text-xl font-bold text-center mb-6">
                    Admin Login
                </h2>

                <input
                    placeholder="Email"
                    required
                    className="border p-3 w-full rounded-lg mb-4"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    required
                    placeholder="Password"
                    className="border p-3 w-full rounded-lg mb-4"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                    Login
                </button>
            </div>
        </div>
    );
}