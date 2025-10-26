import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("ticketapp_user"));

    if (!storedUser) {
      setErrors({ form: "No account found. Please sign up first." });
    } else if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("ticketapp_session", "mock_token");
      window.dispatchEvent(new Event("sessionChange"));
      navigate("/dashboard");
    } else {
      setErrors({ form: "Invalid email or password" });
    }
  };

  return (
    <div className="max-w-md mx-auto mb-12 mt-20 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-3 text-center">Log In</h2>
      <p className="text-center mb-6">
        Welcome back! login in to access your account.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        {errors.form && (
          <p className="text-red-500 text-sm mt-1">{errors.form}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
