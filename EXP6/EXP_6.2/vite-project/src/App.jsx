import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|[a-zA-Z]{2,})$/;

  const rules = {
    capital: /^[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[@$!%*?&]/.test(password),
    length: password.length >= 5,
  };

  const isPasswordValid =
    rules.capital && rules.number && rules.special && rules.length;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailPattern.test(email)) {
      alert("Invalid Email ID");
      return;
    }

    if (!isPasswordValid) {
      alert("Password does not meet all conditions");
      return;
    }

    alert("Login Successfull!");
  };

  return (
    <div className="container">
      <h2>Login page</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>Email ID:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <ul className="rules">
          <li className={rules.capital ? "valid" : "invalid"}>
            Starts with capital letter
          </li>
          <li className={rules.number ? "valid" : "invalid"}>
            Contains at least one number
          </li>
          <li className={rules.special ? "valid" : "invalid"}>
            Contains at least one special character
          </li>
          <li className={rules.length ? "valid" : "invalid"}>
            Minimum 5 characters
          </li>
        </ul>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default App;