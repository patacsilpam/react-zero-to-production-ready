import { useEffect, useState } from "react";
import { Users } from "../types";
import { UserCard } from "./user-card";
const DEFAULT_USERS = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

export function UsersList() {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setUsers(DEFAULT_USERS);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
