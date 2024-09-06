import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

const CreateUser = ({ setUsers }) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleCreateUser = (user) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        setUsers((prevUsers) => [...prevUsers, response.data]);
        setSuccess(true);
      })
      .catch((error) => console.error(error));
  };
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Create User</h2>
      {success && <p>User created successfully!</p>}
      <button onClick={handleBackClick}>Back to Home</button>
      <UserForm
        initialData={{ name: "", email: "", phone: "" }}
        onSubmit={handleCreateUser}
      />
    </div>
  );
};

export default CreateUser;
