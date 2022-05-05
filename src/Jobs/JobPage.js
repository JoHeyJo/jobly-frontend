import React, { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(
    function getJobs() {
      async function getJobsAxios(searchTerm) {
        const jobs = await JoblyApi.getJobs(searchTerm || undefined);
        setJobs(jobs);
        setIsLoading(false);
      }
      getJobsAxios(searchTerm);
    },
    [searchTerm]
  );

  function changeSearchTerm(term) {
    setSearchTerm(term);
    console.log(term);
  }
  /** get job from api */

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <Search changeSearchTerm={changeSearchTerm} searchTerm={searchTerm} />
      </div>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default JobPage;
