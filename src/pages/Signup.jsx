import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ()=> {
  const [form, setForm] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!form.displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    }

    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const userData = {
    displayName: form.displayName,
    email: form.email,
    password: form.password,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate signup
    localStorage.setItem('ticketapp_user', JSON.stringify(userData));
    localStorage.setItem('ticketapp_session', 'mock_tocken')
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mb-12 mt-20 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Display Name</label>
          <input
            type="text"
            name="displayName"
            className="w-full border px-3 py-2 rounded-md"
            value={form.displayName}
            onChange={handleChange}
          />
          {errors.displayName && (
            <p className="text-red-500 text-sm mt-1">{errors.displayName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded-md"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2 rounded-md"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Signup