import { useState } from "react";
import { User } from "../types";

interface UserFormProps {
  addUser: (user: User) => void;
}

const UserForm = ({ addUser }: UserFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Check all fields
    if (!name || !email) {
      setError("Please, fill all fields.");
      return;
    }

    // Create user object
    const newUser = { name, email };

    // Add user through the function passed from App
    addUser(newUser);

    // Show success message
    setSuccessMessage("User added successfully!");

    // Clear form
    setName("");
    setEmail("");

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Add user
        </button>
      </form>
      {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}
      {successMessage && (
        <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
      )}
    </div>
  );
};

export default UserForm;
