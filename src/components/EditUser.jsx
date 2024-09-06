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
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setSuccess(true);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="user-head">Edit User</h2>
      <div className="cen">
        {success && (
          <div className="success">
            <p>User updated successfully!</p>
            <button onClick={handleBackClick}>Back to Home</button>
          </div>
        )}
        <UserForm initialData={user} onSubmit={handleUpdateUser} />
      </div>
    </div>
  );
};

export default EditUser;
