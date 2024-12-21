import { User } from "../App";

type Props = {
  users: User[];
  viewUser: (id: number) => void;
  editUser: (id: number) => void;
  deleteUser: (id: number) => void;
}

export const UserList = ({ users, viewUser, editUser, deleteUser }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th></th>
        </tr>
        {users.length > 0 ? users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fullname}</td>
            <td>
              <button onClick={() => viewUser(user.id)}>View</button>
              <button onClick={() => editUser(user.id)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        )) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </thead>
    </table>
  )
}
