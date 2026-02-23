import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: []
  });

  const states = ["Punjab", "Delhi", "Haryana", "Himachal", "Other"];
  const skillsList = ["HTML", "CSS", "JavaScript", "React"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({ ...form, skills: [...form.skills, value] });
    } else {
      setForm({
        ...form,
        skills: form.skills.filter((skill) => skill !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Successfully Submitted!\n
First Name: ${form.firstName}
Last Name: ${form.lastName}
AGE: ${Math.floor((new Date() - new Date(form.dob)) / (365.25 * 24 * 60 * 60 * 1000))}
Gender: ${form.gender}
Address: ${form.address}
State: ${form.state}
Skills: ${form.skills.join(", ")}
    `);
  };

  const handleCancel = () => {
    setForm({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
      skills: []
    });
  };

  return (
    <div className="container">
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />

        <label>DOB</label>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} max={new Date().toISOString().split('T')[0]} />

        <label>Gender</label>
        <div className="radio">
          <label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} />
            Female
          </label>
        </div>

        <label>Address</label>
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        <label>State</label>
        <select name="state" value={form.state} onChange={handleChange}>
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <label>Skills</label>
        <div className="checkbox">
          {skillsList.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={form.skills.includes(skill)}
                onChange={handleSkillChange}
              />
              {skill}
            </label>
          ))}
        </div>

        <div className="btns">
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;