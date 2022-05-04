import React from "react";
import JobCard from "./JobCard";

/**
 * Takes in jobs and renders list of Job components
 * @param {array} jobs
 * @returns JobCard Components
 */
function JobsList({ jobs }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobsList;
