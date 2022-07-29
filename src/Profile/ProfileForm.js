import React, { useState, useContext } from "react";
import UserContext from "../Auth/UserContext";
import "./Profile.css";

/** get user date and updates
 *
 * state: formData, message
 *
 * context: currentUser
 *
 */
function ProfileForm() {
  const { currentUser, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
  });
  const [message, setMessage] = useState(null);

  /**  updates updateData state */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const updateData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };
    try {
      await setUser(updateData);
    } catch (err) {
      console.log(err);
      setMessage(err);
      return;
    }

    setMessage("Updated Successfully");
  }

  /** update formData state */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }
  return (
    <div>
      <form className="formDisplay" onSubmit={handleSubmit}>
        <label forhtml="username">Username </label>
        <input
          className="input"
          disabled
          name="username"
          value={formData.username}
        />
        <label forhtml="firstName">First Name </label>
        <input
          className="input"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label forhtml="lastName">Last Name </label>
        <input
          className="input"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label forhtml="email">Email </label>
        <input
          className="input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button>Edit User</button>
        <div className="applied">
          <h2>Applied to {currentUser.applications.length} jobs</h2>
        </div>
      </form>

      {message &&
        message.map((msg) => (
          <h4
            key={msg}
            className="alert alert-danger"
            style={{
              marginLeft: "700px",
              marginRight: "700px",
              marginTop: "15px",
            }}
          >
            {msg}
          </h4>
        ))}
    </div>
  );
}

export default ProfileForm;
