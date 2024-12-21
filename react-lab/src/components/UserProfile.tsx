import { User } from "../App";

type Props = {
  viewedUser: User | null;
}

export const UserProfile = ({ viewedUser } :Props) => {
  return (
    viewedUser && (
      <div>
        <h1>User Profile</h1>
        <p>
          <strong>Full Name:</strong> {viewedUser.fullname}
        </p>
        <p>
          <strong>Age:</strong> {viewedUser.age}
        </p>
        <p>
          <strong>Education:</strong> {viewedUser.education}
        </p>
        <p>
          <strong>Gender</strong> {viewedUser.gender}
        </p>
        <p>
          <strong>Skills:</strong> {viewedUser.skills.join(", ")}
        </p>
        <p>
          <strong>Bio:</strong> {viewedUser.bio}
        </p>
      </div>
    )
  )
}
