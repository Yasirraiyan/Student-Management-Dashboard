//import { useContext, useState } from "react";
import React, { useContext, useState } from "react";
//i; //mport { UserContext } from "./UserContext";
//import { MyContext } from "./MyContext";
import { UserContext } from "./UserContext"; // একই folder থেকে import

/*const Login = () => {
  const { login } = useContext(UserContext);
  const [name, setname] = useState("");
  const [role, setRole] = useState("student");
  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, role);
  };

  return (
    <div>
      <h1>Welcome to Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
*/
const Login = () => {
  const { user, login } = useContext(UserContext);
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, role);
  };

  return (
    <div>
      {user && (
        <h2>
          Welcome, {user.name} ({user.role})
        </h2>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
