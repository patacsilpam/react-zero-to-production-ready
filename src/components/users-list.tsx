import { Users } from "../types";
import { UserCard } from "./user-card";
const DEFAULT_USERS = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

export function UsersList() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {DEFAULT_USERS.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
