import React, {useState, useContext } from "react";
import UserContext from "../Auth/UserContext";
import JoblyApi from "../api";



function ProfileForm(){
  const { currentUser, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ 
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username
  })

  async function handleSubmit(evt) {
    evt.preventDefault();
    const updateData = {
                        firstName: formData.firstName, 
                        lastName: formData.lastName, 
                        email: formData.email
                      }
    const user = await JoblyApi.update(formData.username, updateData);
    setUser(user);
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
          disabled
          name="username"
          value={formData.username}
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
        <button>Edit User</button>
      </form>
    </div>
  );
}

export default ProfileForm;