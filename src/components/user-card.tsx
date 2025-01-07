import { Users } from "../types";

type UserCardProps = Users;
export function UserCard(props: UserCardProps) {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 rounded-md max-w-sm">
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  );
}
