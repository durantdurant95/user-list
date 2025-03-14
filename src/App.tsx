import React, { useState } from "react";
import "./App.css";
import UserForm from "./componets/UserForm";
import UserList from "./componets/UserList";
import { User } from "./types";

const App: React.FC = () => {
  // Initialize with empty users array
  const [users, setUsers] = useState<User[]>([]);

  // Function to add a new user
  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  // Function to delete a user
  const deleteUser = (indexToDelete: number) => {
    setUsers(users.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          User Management System
        </h1>

        <UserForm addUser={addUser} />
        <UserList users={users} onDeleteUser={deleteUser} />

        <div className="mt-8 text-center text-sm text-gray-500">
          Total Users: {users.length}
        </div>
      </div>
    </div>
  );
};

export default App;
