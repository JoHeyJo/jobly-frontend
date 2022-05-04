import React, { useState } from "react";

function SignUp({ signUp }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    signUp(formData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label forhtml="username">Username: </label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label forhtml="password">Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label forhtml="firstName">First Name: </label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label forhtml="lastName">Last Name: </label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label forhtml="email">Email: </label>
        <input name="email" value={formData.email} onChange={handleChange} />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
