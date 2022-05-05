import React, {useContext} from "react";
import "./jobCard.css"
import UserContext from "../Auth/UserContext";

/**
 * displays job card
 * 
 * props job
 * 
 * context: UserContext
 */
function JobCard({ job }) {

const { applications, setApplications } = useContext(UserContext);

  function handleApply(evt){
    evt.preventDefault();
    setApplications(applications => ([...applications, job.id ] ))
  }

  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <h3>{job.companyName}</h3>
      <h4>salary: {job.salary}</h4>
      <h4>equity: {job.equity}</h4>
      <span style={{ padding: "5px" }} />
      {applications.includes(job.id)
      ?
      <button disabled >Applied</button>
      :
      <button onClick={handleApply}>Apply</button>
      }

    </div>
  );
}

export default JobCard;
 