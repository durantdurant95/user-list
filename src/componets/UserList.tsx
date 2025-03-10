import React from "react";
import { User } from "../types";

type UserListProps = {
  users: User[];
  onDeleteUser: (index: number) => void;
};

const UserList: React.FC<UserListProps> = ({ users, onDeleteUser }) => {
  // Sort users alphabetically by name
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User List</h2>
        {users.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No users added yet.</p>
        ) : (
          <ul className="list-none space-y-2">
            {sortedUsers.map((user, index) => (
              <li
                key={index}
                className="py-2 px-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-150 ease-in-out text-gray-700 flex justify-between items-center"
              >
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
                <button
                  onClick={() => onDeleteUser(index)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  aria-label={`Delete ${user.name}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserList;
