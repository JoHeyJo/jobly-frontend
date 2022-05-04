import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import JobsList from "./JobsList";

/**
 * Fetches all jobs and displays job list
 * @returns JobList component
 */
function JobPage() {
  const [jobs, setJobs] = useState(null);
  useEffect(function getJobs() {
    async function getJobsAxios() {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobsAxios();
  }, []);

  if (!jobs) return <div>Loading...</div>;
  return (
    <div>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default JobPage;
