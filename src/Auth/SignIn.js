import React, { useState } from "react";

function SignIn({ signIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    signIn(formData);
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

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
