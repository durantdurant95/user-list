import React from "react";
import { User } from "../types";

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  // Sort users alphabetically by name
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4">
      <div className="p-4">
        <ul className="list-none space-y-2">
          {sortedUsers.map((user, index) => (
            <li
              key={index}
              className="py-2 px-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-150 ease-in-out text-gray-700"
            >
              <div>{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
