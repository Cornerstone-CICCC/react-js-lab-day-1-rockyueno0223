import { User } from "../App"

type Props = {
  formData: Omit<User, 'id'>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  handleClear: () => void
}

export const UserForm = ({ formData, handleChange, handleSubmit, handleClear }: Props) => {
  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {/* Fullname */}
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            onChange={handleChange}
            value={formData.fullname}
            required
          />
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            value={formData.age}
            required
          />
        </div>

        {/* Education */}
        <div>
          <label htmlFor="education">Education:</label>
          <select
            id="education"
            name="education"
            onChange={handleChange}
            value={formData.education}
            required
          >
            <option value="">Select</option>
            <option value="Grade School">Grade School</option>
            <option value="High School">High School</option>
            <option value="College">College</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label>Gender:</label>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === "Male"}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === "Female"}
            />
            Female
          </label>
          <label htmlFor="others">
            <input
              type="radio"
              name="gender"
              id="others"
              value="Others"
              onChange={handleChange}
              checked={formData.gender === "Others"}
            />
            Others
          </label>
        </div>

        {/* Skills */}
        <div>
          <label>Skills:</label>
          <div>
            <input type="checkbox" id="typescript" name="skills" value="Typescript" onChange={handleChange} checked={formData.skills.includes('Typescript')} />
            <label htmlFor="typescript">Typescript</label>
          </div>
          <div>
            <input type="checkbox" id="react" name="skills" value="React" onChange={handleChange} checked={formData.skills.includes('React')} />
            <label htmlFor="react">React</label>
          </div>
          <div>
            <input type="checkbox" id="node" name="skills" value="Node" onChange={handleChange} checked={formData.skills.includes('Node')} />
            <label htmlFor="node">Node</label>
          </div>
          <div>
            <input type="checkbox" id="nosql" name="skills" value="NoSQL" onChange={handleChange} checked={formData.skills.includes('NoSQL')} />
            <label htmlFor="nosql">NoSQL</label>
          </div>
        </div>

        {/* bio textarea */}
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            onChange={handleChange}
            value={formData.bio}
          />
        </div>

        {/* Buttons */}
        <button type='submit'>Add/Save User</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  )
}
