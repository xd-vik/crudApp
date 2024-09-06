import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/create">Create User</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<UserList users={users} setUsers={setUsers} />}
        />
        <Route path="/create" element={<CreateUser setUsers={setUsers} />} />
        <Route
          path="/edit/:id"
          element={<EditUser users={users} setUsers={setUsers} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
