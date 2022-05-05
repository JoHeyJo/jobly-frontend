import React, { useContext, useState } from "react";
import "./jobCard.css";
import UserContext from "../Auth/UserContext";

/**
 * displays job card
 *
 * props job
 *
 * state message
 *
 * context: UserContext
 *
 *
 */
function JobCard({ job }) {
  const { currentUser, setApplications } = useContext(UserContext);
  const [message, setMessage] = useState(null);

  /** setApplication state with id, and show message */
  function handleApply(evt) {
    evt.preventDefault();
    try {
      setApplications(job.id);
    } catch (err) {
      setMessage(err);
      return;
    }
    setMessage("Applied successfully");
    const timeId = setTimeout(() => {
      // After 5 seconds set the show value to null
      setMessage(null);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }

  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <h3>{job.companyName}</h3>
      <h4>salary: {job.salary}</h4>
      <h4>equity: {job.equity}</h4>
      {currentUser.applications.includes(job.id) ? (
        !message && (
          <button className="buttonD" disabled>
            Applied
          </button>
        )
      ) : (
        <button className="button" onClick={handleApply}>
          Apply
        </button>
      )}
      <p>{message}</p>
    </div>
  );
}

export default JobCard;
