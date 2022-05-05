import React, { useState } from "react";

/** Sign in user
 * 
 * prop: signIn parent function
 * 
 * state: formData
 * 
 * Aop -> SignIn
 */
function SignIn({ signIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  /** submits form data calls parent function */
  function handleSubmit(evt) {
    evt.preventDefault();
    signIn(formData);
  }


  //catch error...

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
