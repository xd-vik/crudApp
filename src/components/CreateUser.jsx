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
      <h2 className="user-head">Create User</h2>
      <div className="cen">
        {success && (
          <div className="success">
            <p>User created successfully!</p>{" "}
            <button onClick={handleBackClick}>Back to Home</button>{" "}
          </div>
        )}
        <UserForm
          initialData={{ name: "", email: "", phone: "" }}
          onSubmit={handleCreateUser}
        />
      </div>
    </div>
  );
};

export default CreateUser;
