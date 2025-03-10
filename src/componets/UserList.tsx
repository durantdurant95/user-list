import React from "react";

type User = {
  name: string;
};

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  // Sort users alphabetically by name
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">User List</h2>
        <ol className="list-decimal list-inside space-y-2">
          {sortedUsers.map((user, index) => (
            <li
              key={index}
              className="py-2 px-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-150 ease-in-out text-gray-700"
            >
              {user.name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default UserList;
