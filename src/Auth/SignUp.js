import React, { useState } from "react";

/** Sign up user
 * 
 * prop: signUp parent function
 * 
 * state: formData
 * 
 * Aop -> SignUp
 */
function SignUp({ signUp }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  /** submits form data calls parent function */
  function handleSubmit(evt) {
    evt.preventDefault();
    signUp(formData);
  }

  /** update fromData state on change */
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
          required
        />
        <label forhtml="password">Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label forhtml="firstName">First Name: </label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label forhtml="lastName">Last Name: </label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label forhtml="email">Email: </label>
        <input name="email" value={formData.email} onChange={handleChange} />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
