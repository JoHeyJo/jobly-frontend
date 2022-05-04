import React from "react";

/**
 * displays job card
 * @param {obj} param0
 * @returns html
 */
function JobCard({ job }) {
  return (
    <div>
      <h3>{job.title}</h3>
      <h3>{job.companyName}</h3>
      <h4>salary: {job.salary}</h4>
      <h4>equity: {job.equity}</h4>
      <span style={{ padding: "5px" }} />
    </div>
  );
}

export default JobCard;
