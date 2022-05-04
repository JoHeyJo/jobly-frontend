import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import JobsList from "./JobsList";
import Search from "../Common/Search";

/**
 * Fetches all jobs and displays job list
 *
 * state: jobs
 */
function JobPage() {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(function getJobs() {
    getJobsAxios();
  }, []);
  
/** get job from api */
  async function getJobsAxios(name) {
    const jobs = await JoblyApi.getJobs(name);
    setJobs(jobs);
    setIsLoading(false)
  }

  if (isLoading) return <div>Loading...</div>;
  return (

    <div>
      <div>
        <Search search={getJobsAxios} />
      </div>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default JobPage;
