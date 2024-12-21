import { useState } from "react";
import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { UserProfile } from "./components/UserProfile"

export type User = {
  id: number,
  fullname: string,
  age: number,
  education: string,
  gender: string,
  skills: string[],
  bio: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: ""
  });
  const [viewedUser, setViewedUser] = useState<User | null>(null);
  const [editedUserId, setEditedUserId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = e.target;
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: editedUserId || users.length + 1,
      ...formData
    }
    setUsers((prev) => [...prev, newUser]);
    setEditedUserId(null);
    handleClear();
  }

  const handleClear = () => {
    setFormData({
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: ''
    });
  };

  const viewUser = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) return;
    setViewedUser(user);
  }

  const editUser = (userId: number) => {
    setEditedUserId(userId);
    const user = users.find((user) => user.id === userId);
    if (!user) return;

    setFormData({
      fullname: user.fullname,
      age: user.age,
      education: user.education,
      gender: user.gender,
      skills: user.skills,
      bio: user.bio
    });

    // delete the user from the list
    deleteUser(userId);
  }

  const deleteUser = (userId: number) => {
    setUsers(
      users.filter((user) => user.id !== userId)
    );

    // clear the viewed user if the deleted user is the viewed user
    if (viewedUser && viewedUser.id === userId) {
      setViewedUser(null);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <UserForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
      <UserList
        users={users}
        viewUser={viewUser}
        editUser={editUser}
        deleteUser={deleteUser}
      />
      <UserProfile viewedUser={viewedUser} />
    </div>
  )
}

export default App
