import React, { useState } from "react";

const UserForm = ({ initialData, onSubmit }) => {
  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form className="add-user" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className="sub">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
