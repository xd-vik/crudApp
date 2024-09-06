import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

const EditUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const userToEdit = users.find((user) => user.id === parseInt(id));
    setUser(userToEdit);
  }, [id, users]);

  const handleUpdateUser = (updatedUser) => {
    // Simulate API call
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setSuccess(true); // Indicate success
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate to the home page
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit User</h2>
      {success && <p>User updated successfully!</p>}
      <UserForm initialData={user} onSubmit={handleUpdateUser} />
      <button onClick={handleBackClick}>Back to Home</button>
    </div>
  );
};

export default EditUser;
