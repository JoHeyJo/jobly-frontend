import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobsList from "./JobsList";
import Search from "../Common/Search";

/**
 * Fetches all jobs and displays job list
 *
 * state: jobs, isLoading, searchTerm
 */
function JobPage() {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(null);

  /** gets jobs array from API, setJobs state, on searchTerm state change  */
  useEffect(
    function getJobs() {
      async function getJobsAxios(searchTerm) {
        try {
          const jobs = await JoblyApi.getJobs(searchTerm || undefined);
          setJobs(jobs);
          setIsLoading(false);
          setMessage(null)
        } catch (err) {
          setMessage(err);
        }
      }
      getJobsAxios(searchTerm);
    },
    [searchTerm]
  );


  /**  update setStateTerm state */
  function changeSearchTerm(term) {
    setSearchTerm(term);
    console.log(term);
  }

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <Search changeSearchTerm={changeSearchTerm} searchTerm={searchTerm} />
        <p className="error">{message}</p>
      </div>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default JobPage;
