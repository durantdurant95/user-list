import React from "react";
import UserList from "./componets/UserList";

const App: React.FC = () => {
  // Sample user data
  const users = [
    { name: "John Doe" },
    { name: "Alice Smith" },
    { name: "Bob Johnson" },
    { name: "Emma Wilson" },
    { name: "Michael Brown" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          User Management System
        </h1>

        <UserList users={users} />

        <div className="mt-8 text-center text-sm text-gray-500">
          Total Users: {users.length}
        </div>
      </div>
    </div>
  );
};

export default App;
